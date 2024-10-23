const adFeatures = [
    {
        title: "30+ Ad Networks",
        description: "Maximize competition for your ad inventory with premium ad networks including CPM ad networks and gain access to demand from top players like Google, Amazon, Xander, Index Exchange, etc.",
        icon: "https://www.adpushup.com/publisher/wp-content/uploads/2021/06/New-Ad-Networks-1.png", // Replace with actual icon or icon reference
    },
    {
        title: "Improved Page Speed",
        description: "AdPushup's bundle size reduction ensures that ads do not affect the website's core web vitals.",
        icon: "https://www.adpushup.com/publisher/wp-content/uploads/2021/06/Improved-Paged-Vitals.png", // Replace with actual icon or icon reference
    },
    {
        title: "360-Degree Reporting",
        description: "Find out which ad networks earn the most for you and at what time of day- all in one dashboard.",
        icon: "https://www.adpushup.com/publisher/wp-content/uploads/2021/06/360-Analytics-and-Reporting.png", // Replace with actual icon or icon reference
    },
    {
        title: "Best AdSense Alternative",
        description: "Diversify your revenue streams further with Adpushup. Utilize our unique ad formats, advanced targeting options, to maximize ad inventory potential and enhance your earnings.",
        icon: "https://www.adpushup.com/publisher/wp-content/uploads/2023/08/image_2023_08_10T06_28_01_943Z-3-e1723121734849.png", // Replace with actual icon or icon reference
    },
    {
        title: "Access to Premium Demand Partners",
        description: "Amplify your ad revenue with access to the premium Supply Side Platforms, connecting you with a wide range of demand sources and high-quality advertisers.",
        icon: "https://www.adpushup.com/publisher/wp-content/uploads/2023/08/image_2023_08_10T06_28_06_429Z-3.png", // Replace with actual icon or icon reference
    },
    {
        title: "Results-Driven Ad Ops Team",
        description: "Results-driven ad ops team committed to skyrocketing your ad revenue. Best of all, our ad ops team is fueled by dedication, so you can be rest assured knowing you're bound to have substantial growth.",
        icon: "https://www.adpushup.com/publisher/wp-content/uploads/2023/08/networking-1-1-150x150.png", // Replace with actual icon or icon reference
    }
];

const wrapper = document.querySelector('.goodthings_wrapper');

// Iterate over the adFeatures array and create HTML for each object
adFeatures.forEach((feature,index) => {
    const featureDiv = document.createElement('div');
    featureDiv.classList.add('feature_item'); // Add a class for styling if needed

    // Construct the inner HTML of each feature
    featureDiv.innerHTML = `
    <div class="feature_content">
    <h3 class="feature_heading"><span>${index+1}</span> ${feature.title}</h3>
    <p class="feature_desc">${feature.description}</p>
    </div>
    <div class="feature_icon_container">
      <img src="${feature.icon}" class="feature_icon" alt="${feature.title} icon">
    </div>
    `;

    // Append each feature div to the wrapper
    wrapper.appendChild(featureDiv);
});




const sliderWrapper = document.getElementById('sliderWrapper');
let slides = document.querySelectorAll('.slide');
let totalSlides = slides.length;
let currentIndex = 0;
let slideWidth = slides[0].offsetWidth;

// Clone the first and last slides for smooth looping
const firstSlideClone = slides[0].cloneNode(true);
const lastSlideClone = slides[totalSlides - 1].cloneNode(true);

// Append and prepend the cloned slides
sliderWrapper.appendChild(firstSlideClone);
sliderWrapper.insertBefore(lastSlideClone, slides[0]);

// Update the total slide count after cloning
totalSlides = document.querySelectorAll('.slide').length;

function moveSlider() {
    currentIndex++;
    sliderWrapper.style.transition = 'transform 0.5s ease-in-out';
    const offset = -(currentIndex * slideWidth);
    sliderWrapper.style.transform = `translateX(${offset}px)`;

    // Handle looping when reaching the last cloned slide
    if (currentIndex === totalSlides - 1) {
        setTimeout(() => {
            sliderWrapper.style.transition = 'none'; // Disable transition for snap back
            sliderWrapper.style.transform = `translateX(${-slideWidth}px)`; // Snap to the first real slide
            currentIndex = 1; // Reset to first real slide index
        }, 500); // Wait for the transition to finish before resetting
    }

    // Handle looping when reaching the first cloned slide
    if (currentIndex === 0) {
        setTimeout(() => {
            sliderWrapper.style.transition = 'none'; // Disable transition for snap back
            sliderWrapper.style.transform = `translateX(${-(totalSlides - 2) * slideWidth}px)`; // Snap to the last real slide
            currentIndex = totalSlides - 2; // Reset to the last real slide index
        }, 500); // Wait for the transition to finish before resetting
    }
}

// Move slider every 2 seconds
setInterval(moveSlider, 2000);

// Resize handler in case of window resize
window.addEventListener('resize', () => {
    slideWidth = slides[0].offsetWidth; // Update width if resized
});
