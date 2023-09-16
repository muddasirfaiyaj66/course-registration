
# Course Registration

"Course Registration" is a website where you can purchase various types of courses. Here, you can first select and purchase courses according to your preferences.




## Project features

- If you want to purchase the same course more than once, it will be added to your cart only once. If you select the same course more than once, it will display a toast notification.

- On this website, there is a limit to how many courses you can purchase. You cannot add more than 20 credits worth of courses to your cart. If your total selected courses exceed 20 credits, it will display a toast notification.

- Since you can add as many courses as possible as long as they fall within the maximum limit of 20 credits, when you add courses, it will show you how many more credits you can add. If the remaining credit value goes below 0, it will display a toast notification.






## Documentation
I initially created a React project using Vite. Then, I added Tailwind CSS and DaisyUI to it. After that, I used ChatGPT to generate a fake JSON file. Subsequently, I uploaded the necessary images to ImgBB and added the public links to my JSON file. Following this, I structured the website based on the design from the Figma file. Next, I fetched the JSON file, mapped the data dynamically to the cards, and added an onClick function to the buttons on the cards, which retrieves data. Then, I sent the data to the cart, applied conditions, and displayed it on the website.


