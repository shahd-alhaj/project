// قاعدة بيانات البلاغات الأولية
let reportsDatabase = [
    {
        id: '#MUN-1001',
        name: 'أحمد محمود',
        type: 'roads',
        typeName: 'تسريب مياه / حفر شوارع',
        landmark: 'both',
        landmarkName: 'مدرسة ومسجد',
        people: 120,
        phone: '0599123456',
        lat: 31.9522,
        lng: 35.2332,
        status: 'قيد التنفيذ'
    },
    {
        id: '#MUN-1002',
        name: 'سارة خليل',
        type: 'lighting',
        typeName: 'إنارة الطرق العامة',
        landmark: 'none',
        landmarkName: 'لا يوجد',
        people: 15,
        phone: '0599654321',
        lat: 31.9500,
        lng: 35.2300,
        status: 'مستلمة'
    }
];

// أوزان الذكاء الاصطناعي لحساب الأولوية
const TYPE_WEIGHTS = { 'roads': 9, 'building': 8, 'waste': 6, 'lighting': 4, 'other': 3 };
const LANDMARK_WEIGHTS = { 'both': 10, 'school': 8, 'mosque': 7, 'none': 2 };

function calculatePriorityScore(report) {
    const typeScore = (TYPE_WEIGHTS[report.type] || 3) * 10;
    const landmarkScore = (LANDMARK_WEIGHTS[report.landmark] || 2) * 10;
    const peopleScore = Math.min(report.people * 2, 100);
    return Math.round((typeScore * 0.35) + (landmarkScore * 0.35) + (peopleScore * 0.30));
}

// عرض لوحة تحكم الذكاء الاصطناعي
function renderAiDashboard() {
    const tableBody = document.getElementById('aiReportsList');
    if (!tableBody) return;
    tableBody.innerHTML = '';

    reportsDatabase.forEach(report => {
        report.score = calculatePriorityScore(report);
    });

    reportsDatabase.sort((a, b) => b.score - a.score);

    reportsDatabase.forEach(report => {
        let badgeClass = 'badge-normal';
        let priorityText = 'عادية';
        let actionText = 'جدولة ضمن الخطة الأسبوعية';

        if (report.score >= 75) {
            badgeClass = 'badge-urgent';
            priorityText = 'طوارئ قصوى (' + report.score + '%)';
            actionText = 'إرسال فريق صيانة فوري';
        } else if (report.score >= 50) {
            badgeClass = 'badge-high';
            priorityText = 'مرتفعة (' + report.score + '%)';
            actionText = 'أولوية الأسبوع الحالي';
        }

        const mapUrl = `https://maps.google.com/?q=${report.lat},${report.lng}`;

        const row = `
            <tr>
                <td><span class="badge ${badgeClass}">${priorityText}</span></td>
                <td><strong>${report.id}</strong></td>
                <td>${report.name}</td>
                <td>${report.typeName}</td>
                <td>${report.landmarkName}</td>
                <td>${report.people} مواطن</td>
                <td><a href="${mapUrl}" target="_blank" class="map-link"><i class="fa-solid fa-location-dot"></i> الخريطة</a></td>
                <td style="color: #60a5fa; font-weight: 500;">${actionText}</td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

// تصدير ملف Excel
function exportToExcel() {
    if (reportsDatabase.length === 0) return alert("لا توجد بيانات لتصديرها!");

    const dataToExport = reportsDatabase.map(report => ({
        "رقم البلاغ": report.id,
        "درجة الأولوية": report.score + "%",
        "اسم المواطن": report.name,
        "رقم الهاتف": report.phone,
        "نوع المشكلة": report.typeName,
        "المعالم القريبة": report.landmarkName,
        "عدد المتأثرين": report.people,
        "رابط الخريطة": `https://maps.google.com/?q=${report.lat},${report.lng}`
    }));

    const worksheet = XLSX.utils.json_to_sheet(dataToExport);
    worksheet['!dir'] = 'rtl';
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "البلاغات");
    XLSX.writeFile(workbook, `تقارير_البلدية_${new Date().toISOString().slice(0, 10)}.xlsx`);
}

// تصدير ملف PDF
function exportToPDF() {
    if (reportsDatabase.length === 0) return alert("لا توجد بيانات!");

    const pdfTemplate = document.getElementById('pdfTemplate');
    const pdfTableBody = document.getElementById('pdfTableBody');
    
    document.getElementById('pdfDate').textContent = new Date().toLocaleDateString('ar-EG');
    document.getElementById('pdfReportId').textContent = 'REP-' + Math.floor(1000 + Math.random() * 9000);

    pdfTableBody.innerHTML = '';
    reportsDatabase.forEach(report => {
        const row = `
            <tr>
                <td>%${report.score}</td>
                <td>${report.id}</td>
                <td>${report.name}</td>
                <td>${report.typeName}</td>
                <td>${report.landmarkName}</td>
                <td>${report.people}</td>
                <td>${report.score >= 75 ? 'صيانة فورية' : 'جدولة أسبوعية'}</td>
            </tr>
        `;
        pdfTableBody.innerHTML += row;
    });

    pdfTemplate.style.display = 'block';

    const opt = {
        margin: 10,
        filename: `تقرير_البلدية_الرسمي.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(pdfTemplate).save().then(() => {
        pdfTemplate.style.display = 'none';
    });
}

// تشغيل النظام والخرائط عند التحميل
document.addEventListener('DOMContentLoaded', () => {
    // 1. تهيئة الخريطة Leaflet
    const defaultLat = 31.9522;
    const defaultLng = 35.2332;
    
    document.getElementById('latitude').value = defaultLat;
    document.getElementById('longitude').value = defaultLng;

    const map = L.map('map').setView([defaultLat, defaultLng], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
    let marker = L.marker([defaultLat, defaultLng], { draggable: true }).addTo(map);

    function updateCoords(lat, lng) {
        document.getElementById('latitude').value = lat;
        document.getElementById('longitude').value = lng;
    }

    marker.on('dragend', (e) => updateCoords(e.target.getLatLng().lat, e.target.getLatLng().lng));
    map.on('click', (e) => {
        marker.setLatLng(e.latlng);
        updateCoords(e.latlng.lat, e.latlng.lng);
    });

    // زر تحديد الموقع GPS
    document.getElementById('locateBtn').addEventListener('click', () => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(pos => {
                const lat = pos.coords.latitude;
                const lng = pos.coords.longitude;
                map.setView([lat, lng], 16);
                marker.setLatLng([lat, lng]);
                updateCoords(lat, lng);
            }, () => alert("تعذر جلب موقعك عبر الـ GPS"));
        }
    });

    // 2. معالجةرفع الصورة
    const uploadArea = document.getElementById('uploadArea');
    const fileInput = document.getElementById('fileInput');
    uploadArea.addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                document.getElementById('previewArea').innerHTML = `<img src="${event.target.result}">`;
            };
            reader.readAsDataURL(file);
        }
    });

    // 3. إرسال النموذج
    const municipalityForm = document.getElementById('municipalityForm');
    municipalityForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newCode = '#MUN-' + Math.floor(1000 + Math.random() * 9000);

        const newReport = {
            id: newCode,
            name: document.getElementById('fullName').value,
            type: document.getElementById('problemType').value,
            typeName: document.getElementById('problemType').options[document.getElementById('problemType').selectedIndex].text,
            landmark: document.getElementById('nearLandmark').value,
            landmarkName: document.getElementById('nearLandmark').options[document.getElementById('nearLandmark').selectedIndex].text,
            people: parseInt(document.getElementById('peopleCount').value) || 1,
            phone: document.getElementById('phone').value,
            lat: parseFloat(document.getElementById('latitude').value),
            lng: parseFloat(document.getElementById('longitude').value),
            status: 'مستلمة جديداً'
        };

        reportsDatabase.push(newReport);
        renderAiDashboard();

        document.getElementById('trackingCode').textContent = newCode;
        document.getElementById('successModal').style.display = 'flex';
        municipalityForm.reset();
        document.getElementById('previewArea').innerHTML = '';
    });

    // 4. البحث وتتبع البلاغ
    document.getElementById('searchTrackBtn').addEventListener('click', () => {
        const code = document.getElementById('trackCodeInput').value.trim();
        const resultDiv = document.getElementById('trackResult');
        const report = reportsDatabase.find(r => r.id === code);

        resultDiv.style.display = 'block';
        if (report) {
            resultDiv.innerHTML = `
                <p style="color: #10b981;"><strong>حالة البلاغ:</strong> ${report.status}</p>
                <p><strong>نوع البلاغ:</strong> ${report.typeName}</p>
                <p><strong>الأولوية المحسوبة:</strong> %${report.score || 'تحت التقييم'}</p>
            `;
        } else {
            resultDiv.innerHTML = `<p style="color: #ef4444;">لم يتم العثور على بلاغ بهذا الرقم.</p>`;
        }
    });

    // 5. ربط أزرار التصدير والذكاء الاصطناعي
    document.getElementById('runAiBtn').addEventListener('click', renderAiDashboard);
    document.getElementById('exportExcelBtn').addEventListener('click', exportToExcel);
    document.getElementById('exportPdfBtn').addEventListener('click', exportToPDF);

    renderAiDashboard();
});

function closeModal() {
    document.getElementById('successModal').style.display = 'none';
}