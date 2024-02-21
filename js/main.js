const events = [
  {
    title: "Annual Alumni Mixer",
    image: "./images/event1.jpg",
    location: "Grand Ballroom, City Center",
    time: "2024-04-15 18:00",
    description:
      "Join us for an evening of networking and reconnecting with fellow alumni. Drinks and appetizers will be served.",
    slug: "annual-alumni-mixer",
  },
  {
    title: "Career Development Workshop",
    image: "./images/event2.jpg",
    location: "Room 203, Business Building",
    time: "2024-05-02 14:30",
    description:
      "Explore new career opportunities and gain valuable insights from industry professionals. Don't miss this chance to boost your career!",
    slug: "career-development-workshop",
  },
  {
    image: "./images/sport.jpg",
    title: "Sports Day at Campus",
    location: "University Sports Complex",
    time: "2024-06-10 10:00",
    description:
      "Get active and relive the university spirit at our annual sports day. Cheer for your favorite teams and enjoy a day filled with friendly competition.",
    video: "https://www.youtube.com/embed/I3OIbbuZ1XE",
    slug: "sports-day-at-campus",
  },
  // Add more events as needed
  {
    title: "Tech Talk Series: AI in Everyday Life",
    image: "./images/ai.jpeg",
    location: "Auditorium, Engineering Building",
    time: "2024-07-05 16:00",
    description:
      "Explore the fascinating world of Artificial Intelligence and its impact on our daily lives. Engage in discussions with leading experts in the field.",
    slug: "tech-talk-ai-everyday-life",
    video: "https://www.youtube.com/embed/tWP6z0hvw1M",
  },
  {
    title: "Cultural Fest Extravaganza",
    image: "./images/culture.png",
    location: "Open Air Amphitheater",
    time: "2024-08-20 19:00",
    description:
      "Experience the diversity of cultures within our alumni community. Enjoy cultural performances, delicious international cuisine, and vibrant displays.",
    video: "https://www.youtube.com/embed/vIYJ27aRHRI",
    slug: "cultural-fest-extravaganza",
  },
  {
    image: "./images/event3.jpg",
    title: "Entrepreneurship Summit",
    location: "Innovation Hub, Business Park",
    time: "2024-09-12 09:30",
    description:
      "Ignite your entrepreneurial spirit! Connect with successful entrepreneurs, attend insightful workshops, and learn from the leaders in the business world.",
    slug: "entrepreneurship-summit",
  },
  {
    title: "Health and Wellness Retreat",
    image: "./images/event4.jpg",

    location: "Wellness Resort, Mountain Retreat",
    time: "2024-10-08 12:00",
    description:
      "Take a break and focus on your well-being. Join us for a rejuvenating retreat surrounded by nature, fitness activities, and mindfulness sessions.",
    slug: "health-wellness-retreat",
  },
  {
    image: "./images/art.jpeg",
    title: "Artistic Expression Gallery",
    location: "Contemporary Art Museum",
    time: "2024-11-04 17:30",
    description:
      "Celebrate the creativity of our alumni community. Explore diverse artworks, meet talented artists, and immerse yourself in the world of artistic expression.",
    slug: "artistic-expression-gallery",
  },
  {
    image: "./images/sport.jpg",

    title: "Annual Charity Run",
    location: "City Park",
    time: "2024-12-01 08:00",
    description:
      "Run for a cause! Join us in our annual charity run to support local community projects. Lace up your running shoes and make a positive impact.",
    slug: "annual-charity-run",
  },
  {
    image: "./images/event4.jpg",

    title: "Science and Technology Symposium",
    location: "Science Center Auditorium",
    time: "2025-01-18 13:00",
    description:
      "Stay updated on the latest advancements in science and technology. Engage in discussions, attend presentations, and connect with experts in various fields.",
    slug: "science-technology-symposium",
  },
  {
    image: "./images/event1.jpg",

    title: "Winter Wonderland Gala",
    location: "Grand Hotel Ballroom",
    time: "2025-02-14 20:00",
    description:
      "Dress in your finest attire and join us for a magical winter night. Enjoy live music, gourmet cuisine, and dance the night away in a winter wonderland setting.",
    slug: "winter-wonderland-gala",
  },
  {
    image: "./images/meeting.webp",

    title: "Environmental Conservation Workshop",
    location: "Ecology Research Center",
    time: "2025-03-07 15:30",
    description:
      "Become an advocate for the environment! Attend our workshop on environmental conservation, learn about sustainable practices, and contribute to a greener future.",
    slug: "environmental-conservation-workshop",
  },
];

events.sort((a, b) => new Date(a.time) - new Date(b.time));

function formatMonth(dateString) {
  const date = new Date(dateString);
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return monthNames[date.getMonth()];
}

function formatDay(dateString) {
  const date = new Date(dateString);
  return date.getDate().toString().padStart(2, "0");
}

function getSlugFromUrl() {
  return window.location.search.replace("?", "");
}

function eventHTML(event) {
  return `
        <div class="event">
          <div class="image">
            <img src="${event.image}" alt="Image" />
          </div>
          <div class="abs">
            <div class="num">${formatDay(event.time)}</div>
            <div class="text">${formatMonth(event.time)}</div>
          </div>
          <div class="details">
            <div class="event-title">${event.title}</div>
            <div class="event-short-desc">${event.description}</div>
            <div class="list">
              <p class="event-location">
                <i class="fa fa-solid fa-location-crosshairs"></i>${
                  event.location
                }
              </p>
              <p class="event-time">
                <i class="fa fa-calendar"></i>${event.time}
              </p>
            </div>
            <div class="link">
              <a href="event.html?${event.slug}">Read more</a>
              <a href="reserve.html?${event.slug}">Reserve seat</a>
            </div>
          </div>
        </div>
      `;
}

$(document).ready(function () {
  // Assuming eventsArray is defined here

  // Take the first 3 events from the array
  if (page === "homepage") {
    const firstThreeEvents = events.slice(1, 4);

    // Create HTML structure for each event
    firstThreeEvents.forEach(function (event, index) {
      const html = eventHTML(event);

      // Append the event HTML to the .events container
      $(".events").append(html);

      // Countdown
    });
    function updateCountdown() {
      const now = new Date();
      const firstEventTime = new Date(events[0].time);
      const timeDifference = firstEventTime - now;

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
        .toString()
        .padStart(2, "0");
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
        .toString()
        .padStart(2, "0");
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      )
        .toString()
        .padStart(2, "0");
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000)
        .toString()
        .padStart(2, "0");

      // Update the HTML with the countdown values
      $("#countdown").html(`
        <div class="time"><div class="num">${days}</div><div class="text">days</div></div>
        <div class="time"><div class="num">${hours}</div><div class="text">hours</div></div>
        <div class="time"><div class="num">${minutes}</div><div class="text">minutes</div></div>
        <div class="time"><div class="num">${seconds}</div><div class="text">seconds</div></div>
      `);
    }

    // Call the updateCountdown function initially
    updateCountdown();

    // Update the countdown every second
    setInterval(updateCountdown, 1000);

    $(".upcoming-section .event-title").text(events[0].title);
    $(".upcoming-section .event-location").text(events[0].location);
    $(".upcoming-section .absolute-btn").html(
      `<a href="reserve.html?${events[0].slug}" class="btn">Reserve seat</a>`
    );
  }
  if (page === "events") {
    // Create HTML structure for each event
    events.forEach(function (event, index) {
      const html = eventHTML(event);

      // Append the event HTML to the .events container
      $(".events").append(html);
    });
  }
  if (page === "contact") {
    const eventSelect = $("#event-input");

    // Loop through the sorted events and add options to the select
    events.forEach((event, index) => {
      eventSelect.append(
        `<option value="${index}" ${
          getSlugFromUrl() === event.slug ? "selected" : ""
        }>${event.title}</option>`
      );
    });
  }

  if (page == "event") {
    const selectedEvent = events.find(
      (event) => event.slug === getSlugFromUrl()
    );

    // Update the HTML with event details
    $("#eventTitle").text(selectedEvent.title);
    $("#eventDescription").text(selectedEvent.description);
    $("#eventTime").html(
      `<i class="fa fa-calendar"></i> ${selectedEvent.time}`
    );
    $("#eventLocation").html(
      `<i class="fa fa-location-crosshairs"></i> ${selectedEvent.location}`
    );
    $("#eventImage").html(
      `<img src="${selectedEvent.image}" alt="${selectedEvent.title}" /> `
    );
    if (selectedEvent.video !== undefined) {
      $("#eventVideo").html(
        `<iframe
        width="560"
        height="315"
        src="${selectedEvent.video}"
        frameborder="0"
        allowfullscreen
      ></iframe>`
      );
    }
    $(".event-description .links")
      .html(`<a href="reserve.html?${selectedEvent.slug}" id="reserveBtn" class="btn btn-primary"
    >Reserve seat</a
  >`);

    $("#reserveBtn").attr("href", `reserve.html?slug=${selectedEvent.slug}`);
  }
});
