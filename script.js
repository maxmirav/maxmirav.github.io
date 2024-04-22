// Portfolio items data
const portfolioItems = [
    {
      title: "The Witness - A Game Review",
      description: "...I sincerely believe that The Witness is a game that anyone who is remotely interested in the medium of video games should play at least once. The experience of playing it is akin to how one goes about acquiring a taste for weird food: gagging at first taste, but learning to love, and even yearn, the weirdness over time.",
      link: "https://drive.google.com/file/d/1qVPXOn5NVVSnedbr5Nl-QoFp7MbD2g0R/view?usp=sharing",
      image: "images/thewitness.jpeg"
    },
    {
      title: "How to Combine Databases in Notion",
      description: "While Notion doesn't merge databases exactly like how a traditional spreadsheet program (e.g. Excel, Google Sheets) does, its flexibility allows for creative solutions when it comes to combining databases.",
      link: "https://drive.google.com/file/d/1XvOe_duh-hl1dQgmdQqZeUnn5wgMuKq8/view?usp=sharing",
      image: "images/notiondatabase.png"
    },
    {
      title: "Why I Like to Write Blogs",
      description: "In the beginning there was Geocities, and it was good.",
      link: "https://drive.google.com/file/d/1afPDAsddqedNLejw-OhaW-itkvIqI0O6/view?usp=sharing",
      image: "images/geocities.jpg"
    },
    {
      title: "How to Make Notion Aesthetic: Three Elements to Master",
      description: "So, you want your Notion setup to look cool. But the problem is... you have no design experience. You don't know how to draw, how to pick colors, how to arrange elements effectively on a page. Is this really something your design-challenged self can do?",
      link: "https://drive.google.com/file/d/1MIHVPNb00ugTcjQ9aBKKPD_FlCyhhLMq/view?usp=sharing",
      image: "images/notion.JPG"
    },
    {
      title: "Why Does Your Voice Sound Weird in Recordings?",
      description: "For most people, hearing their own voices on a recording can be uncomfortable. They might find themselves sounding strange and weirdly high-pitched, vastly different from what they think they sound like in their heads. So common this phenomenon is that psychologists actually coined a specific term for it: voice confrontation.",
      link: "https://drive.google.com/file/d/1rRHWcUMHgv3p2WOa42CptBZCQYqccqNU/view?usp=sharing",
      image: "images/voice-recording.JPG"
    },
    {
      title: "Ethereum's Big Merge",
      description: "True to its reputation as being a trailblazer in the crypto world, Ethereum is now pulling off what most experts agree would be one of the biggest upgrades that the blockchain community has ever seen.",
      link: "https://drive.google.com/file/d/19OIWhwSMfulETR_ksSdojPsTp1VHOS8M/view?usp=sharing",
      image: "images/ethereum.JPG"
    },
    {
      title: "Why PHP is a Good Choice for Web Development",
      description: "Despite the jokes, the fact remains that PHP is still one of the most well-known languages out there.",
      link: "https://drive.google.com/file/d/1RIPz2SPLXtcl6Kf7BRLQekOz7dIFiYZn/view?usp=sharing",
      image: "images/php.JPG"
    },
    {
      title: "Thoughts from a Former (Video Game) Pirate",
      description: "This rambling history of mine is intended to contextualize my views regarding the very curious reaction of pirates and anti-pirates to two very different, recently-released, indie games: Eric Barone's Stardew Valley and Jonathan Blow's The Witness.",
      link: "https://drive.google.com/file/d/1KwUCJIBhXxn13FKz8TFANv9a2pd3kOE1/view?usp=sharing",
      image: "images/piracy.png"
    },
    {
      title: "Best VPNs for Geo-Blocking in 2022",
      description: "It's quite common for content producers to limit access to their works to a particular geographic location due to copyright, pricing, and licensing issues. Unfortunately, this is also the reason why streaming providers like Netflix, Hulu, and HBO GO limit their library based on the location of the user accessing it.",
      link: "https://drive.google.com/file/d/1p0rcF6hCkT6SK_H0xz-TRoG-axWAzq8Z/view?usp=sharing",
      image: "images/vpn.JPG"
    },
    {
      title: "Five Wordle Tips to Guess the Correct Word",
      description: "Depending on your aptitude for word-guessing, solving a Wordle puzzle can take a long time. To cut out the time needed to guess the winning word, here are a few tips.",
      link: "https://drive.google.com/file/d/1t-H8Clz8ZQKfObNgHtg8iFHSELjkTRzh/view?usp=sharing",
      image: "images/wordle.JPG"
    }
  ];
  
  // Function to generate portfolio items dynamically
  function generatePortfolioItems() {
    const cardsContainer = document.querySelector(".cards");
  
    portfolioItems.forEach(item => {
      const card = document.createElement("div");
      card.classList.add("card");
  
      const content = `
        <a href="${item.link}" target="_blank">
          <img src="${item.image}" alt="${item.title}">
          <div class="card-content">
            <h2>${item.title}</h2>
            <p>${item.description}</p>
          </div>
        </a>
      `;
  
      card.innerHTML = content;
      cardsContainer.appendChild(card);
    });
  }
  
  // Call the function to generate portfolio items
  generatePortfolioItems();