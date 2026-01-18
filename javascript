const videoInput = document.getElementById('video-upload');
const videoStatus = document.getElementById('video-status');
const downloadBtn = document.getElementById('download-link');

videoInput.addEventListener('change', function() {
    if (this.files && this.files[0]) {
        const fileName = this.files[0].name;
        
        // ১. ফাইল সিলেক্ট হয়েছে তা দেখানো
        videoStatus.innerHTML = `Selected: <b>${fileName}</b> <br> Processing like iPhone 17 Pro Max...`;
        videoStatus.style.color = "blue";

        // ২. একটি ফেক প্রসেসিং টাইম সেট করা (যেমন: ৪ সেকেন্ড)
        setTimeout(() => {
            // ৩. প্রসেসিং শেষ হলে যা হবে
            videoStatus.innerHTML = "✅ Processing Complete! High Quality Applied.";
            videoStatus.style.color = "green";

            // ডাউনলোড বাটনটি দৃশ্যমান করা
            downloadBtn.style.display = "inline-block";
            
            // সাময়িকভাবে অরিজিনাল ফাইলটিই ডাউনলোডের জন্য সেট করা
            const fileURL = URL.createObjectURL(videoInput.files[0]);
            downloadBtn.href = fileURL;
            downloadBtn.download = "iphone17_pm_style_" + fileName;
        }, 4000); 
    }
});
