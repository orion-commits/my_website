const eventsItems = [
  {
    title: "8 Day Boot-Camp (Phase 1)",
    desc: "An 8-day hands-on journey into the world of communication engineering. <br> Covered: Basics of electronics, resistors, capacitors & communication systems (Days 1–2). <br> Next: Diving deeper each day, leading to the design and build of an antenna by the end of Phase One. <br> Learn by doing. <br><br> Build from basics to real engineering.",
    image: "assets/gallery/2.jpeg",
  },
  {
  title: "Circuit Designing Competition",
  desc: "As part of Phase One, we conducted a hands-on circuit designing competition where participants applied their basics of electronics to create innovative circuits and showcase their problem-solving skills.",
  image: "assets/events/ckt.jpeg",
},
{
  title: "Coding Competition",
  desc: "We organized a Coding Competition where students showcased their skills in C, C++ and Java through problem-solving challenges. The event encouraged logical thinking, speed, and creativity. After intense rounds, four winners emerged and celebrated with an Alfahm Mandi treat, making the competition both exciting and memorable.",
  image: "assets/events/coding.jpeg",
},


 {
  title: "Outreach Programme",
  desc: "Session at GHSS Valad introducing students to basic electronics, communication, and microcontrollers — sparking interest and giving them a strong first step into the world of technology.",
  image: "assets/gallery/3.jpg",
}



];

const container = document.querySelector(".events-container");

eventsItems.forEach((item) => {
  const card = document.createElement("div");
  card.className = "events-card";
  card.innerHTML = `
    <div class="event-image">
      <img src="${item.image}" alt="${item.title}">
    </div>
    <div class="event-info">
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
    </div>
  `;
  container.appendChild(card);
});
