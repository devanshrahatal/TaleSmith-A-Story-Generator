const stories = {
    adventure: [
        "The Enchanted Forest: Deep within the kingdom of Eldoria lay an enchanted forest, where time moved differently and creatures from legends roamed. Maya, a young mage-in-training, ventured into the forest to prove her skills. She encountered talking trees, mischievous sprites, and a river that reversed time. But what she didn’t expect was to find an ancient dragon, long thought extinct. The dragon was trapped by a curse, and only Maya could break it. With the dragon’s help, she could return to her village a hero—but if she failed, she would be trapped in the forest forever.",
        "The Crystal Blade: In the kingdom of Virelia, the Crystal Blade was a legendary weapon said to grant its wielder the power to control the elements. It had been lost for centuries, until Aiden, a humble blacksmith’s apprentice, discovered its location in an ancient manuscript. Accompanied by his friend Lyra, a skilled archer, Aiden embarked on a perilous journey to retrieve the blade. But they weren’t the only ones searching for it. Dark forces also sought its power, and Aiden would have to prove he was worthy of wielding the blade to prevent it from falling into the wrong hands.",
        "The Sorcerer's Curse: Long ago, the kingdom of Aerith was ruled by a benevolent sorcerer. But when he mysteriously vanished, his magic turned dark, casting a curse upon the land. Rivers dried up, crops withered, and creatures of the night roamed the streets. Lena, the sorcerer’s apprentice, believed he was still alive—trapped in a realm of his own making. Armed with a spellbook and her wits, Lena ventured into the magical realm to save her master. Along the way, she encountered magical beasts, treacherous illusions, and a dark secret that threatened to unravel everything she believed about her master."
    ],
    mystery: [
        "The Vanishing Neighbor: In the sleepy town of Willow Creek, everyone knew everyone. So when Mrs. Lancaster, the quiet woman who lived next door to Amy, vanished one morning, the whole town was abuzz. Her house remained untouched—no signs of a struggle, no notes, just an eerie silence. Amy, intrigued, began investigating. She found a strange journal in Mrs. Lancaster’s attic, filled with cryptic symbols and mentions of secret societies. As Amy dug deeper, she realized the town had a dark past, one that had claimed Mrs. Lancaster—and might soon claim her too.",
        "The Clockwork Killer: Detective Sarah Chase had seen her fair share of cases, but the Clockwork Killer was different. Every victim was found with a broken pocket watch in hand, stopped at precisely 12:00. There were no leads, no motives. The victims had no apparent connection—until Sarah discovered an old photograph linking them all. They had once been part of a secret organization, one with dangerous enemies. The clock was ticking, and if Sarah couldn’t solve the case, she would be the next victim.",
        "The Phantom of Maple Street: For years, residents of Maple Street reported strange noises at night: footsteps, whispers, and cold drafts that seemed to come from nowhere. Some claimed to see a shadowy figure lurking in the alleyways. When detective Liam Moore moved to the street, he dismissed the rumors—until the night he heard the footsteps himself. Determined to uncover the truth, Liam began piecing together the street’s history. He discovered that an unsolved murder from decades ago still haunted the area. The ghost wasn’t just wandering aimlessly—it wanted justice."
    ],
    fantasy: [
        "The Enchanted Forest: Deep within the kingdom of Eldoria lay an enchanted forest, where time moved differently and creatures from legends roamed. Maya, a young mage-in-training, ventured into the forest to prove her skills. She encountered talking trees, mischievous sprites, and a river that reversed time. But what she didn’t expect was to find an ancient dragon, long thought extinct. The dragon was trapped by a curse, and only Maya could break it. With the dragon’s help, she could return to her village a hero—but if she failed, she would be trapped in the forest forever.",
        "The Crystal Blade: In the kingdom of Virelia, the Crystal Blade was a legendary weapon said to grant its wielder the power to control the elements. It had been lost for centuries, until Aiden, a humble blacksmith’s apprentice, discovered its location in an ancient manuscript. Accompanied by his friend Lyra, a skilled archer, Aiden embarked on a perilous journey to retrieve the blade. But they weren’t the only ones searching for it. Dark forces also sought its power, and Aiden would have to prove he was worthy of wielding the blade to prevent it from falling into the wrong hands.",
        "The Sorcerer's Curse: Long ago, the kingdom of Aerith was ruled by a benevolent sorcerer. But when he mysteriously vanished, his magic turned dark, casting a curse upon the land. Rivers dried up, crops withered, and creatures of the night roamed the streets. Lena, the sorcerer’s apprentice, believed he was still alive—trapped in a realm of his own making. Armed with a spellbook and her wits, Lena ventured into the magical realm to save her master. Along the way, she encountered magical beasts, treacherous illusions, and a dark secret that threatened to unravel everything she believed about her master."
    ],
    'sci-fi': [
        "The Last Transmission: The starship Helios had been drifting for years, its crew long gone, presumed dead. When an automated distress signal was detected from the ship, Commander Ryker and his team were sent to investigate. Upon boarding, they found the ship empty, but the logs told a different story. The crew had encountered something out in deep space—something not human. As Ryker delved deeper, he began to hear whispers, feel unseen presences, and realize that Helios wasn’t as empty as it seemed. The last transmission was a warning, but now it was too late.",
        "The Infinite City: In the year 3025, humanity had abandoned Earth and built the Infinite City, a massive, self-sustaining metropolis orbiting a distant star. Maya, a hacker, was hired to find someone who had disappeared in the city’s endless streets. The deeper she dug, the more she realized the city held dark secrets—entire neighborhoods that didn’t exist on any map, AI programs running rogue, and people vanishing without a trace. Maya soon discovered that the city was more than a marvel of human engineering—it was alive, and it had its own plans.",
        "Chrono Defenders: Time travel was humanity’s greatest achievement, but it came with a cost. The Chrono Defenders were tasked with preserving the timeline, stopping rogue travelers from altering the past. Ethan, a rookie Chrono Defender, was on his first mission when he stumbled upon a conspiracy. A group of travelers planned to change the outcome of a critical historical event, one that could cause a catastrophic time paradox. Ethan had to outsmart them, hopping through different time periods, but the more he fought to save the timeline, the more he questioned if it was worth saving at all."
    ],
    love: [
        "Eternal Love: Isabella and Marcus had been childhood friends, their bond unshakeable. Over the years, their friendship blossomed into love, but Marcus had to leave for the war, promising to return. Years passed, and while everyone told Isabella to move on, she knew deep in her heart that Marcus would return. One fateful day, as the cherry blossoms bloomed, Marcus walked through the village gates, a smile on his face, fulfilling the promise he had made all those years ago.",
        "The Letter: Emily had always admired Ethan from afar, never brave enough to tell him how she felt. One day, she wrote a heartfelt letter, pouring all her feelings into words, but she never had the courage to send it. Years later, while cleaning her childhood room, Emily found the letter hidden away in an old book. She decided to take a chance and deliver it to Ethan, not knowing if he felt the same. The letter changed everything.",
        "Love Across Time: Sophia had always felt out of place in her time, dreaming of a love from a different era. One night, while exploring an antique bookstore, she stumbled upon a mysterious old locket. When she opened it, she was transported to Victorian England, where she met Alexander, a kind and noble gentleman. They fell in love, but Sophia had to return to her own time. She now spends her days trying to find a way back to him, knowing their love transcends time itself."
    ],
    sad: [
        "The Last Goodbye: Sarah and Ben had been inseparable since high school. But when Ben was diagnosed with a terminal illness, their lives changed forever. They spent every remaining day together, creating memories they both cherished. On Ben’s last day, they sat by the window, holding hands, watching the sunset. As Ben drifted off peacefully, Sarah whispered a tearful goodbye, knowing she had lost her soulmate but was grateful for every moment they had shared.",
        "The Broken Promise: When Lily and Jason got married, they made a promise to always be together, no matter what. But life had other plans. Jason’s job took him across the world, and the distance grew between them. Eventually, they drifted apart, and their love turned into a distant memory. Years later, Lily stood at the shore where they had once shared a passionate kiss, reflecting on the broken promise that neither of them could keep.",
        "Faded Memories: After a long and happy marriage, Helen found herself alone when her husband, Robert, passed away. Each room in their house held memories of their love—the laughter, the joy, the quiet moments together. But now, those memories felt like ghosts haunting her every day. Helen decided to write down their story, preserving every beautiful moment, hoping that as she poured her heart onto the pages, she could find solace in the love they once shared.",
        "The Empty Chair: At every family gathering, the chair across from Mia remained empty. It was where her brother used to sit, sharing laughter and stories. After his unexpected passing, family dinners became a bittersweet reminder of their lost bond. Mia decided to honor his memory by keeping that chair empty, a symbol of the love they shared, and began inviting others to join her in remembering him through stories, finding healing in shared grief.",
        "A Photograph in Time: When Clara stumbled upon an old photograph of her and her best friend, Jenna, it brought back waves of nostalgia. They had shared dreams, secrets, and laughter, but a misunderstanding tore them apart. With tears in her eyes, Clara wished she could turn back time and mend their friendship. In an effort to reach out, she sent a heartfelt letter to Jenna, hoping to rekindle the bond they once had, even if it took years to heal.","Whispers of the Past: As Emma sorted through her late grandmother's belongings, she found a box filled with love letters from a mysterious admirer. The letters revealed a beautiful love story that had never been told—a tale of passion, heartbreak, and ultimately, loss. As Emma read each letter, she felt connected to a love that transcended generations. Through the tears, she realized the importance of love and how it shapes our lives, even when it's tinged with sadness."
    ]
};

function generateStory() {
    const genre = document.getElementById('genre').value;
    const storyArray = stories[genre];
    const randomStory = storyArray[Math.floor(Math.random() * storyArray.length)];
    
    document.getElementById('storyText').innerHTML = randomStory;
    document.getElementById('dictateBtn').style.display = 'block';
    document.getElementById('downloadBtn').style.display = 'block';
}

function dictateStory() {
    const storyText = document.getElementById('storyText').innerText;
    
    if ('speechSynthesis' in window) {
        const speech = new SpeechSynthesisUtterance(storyText);
        speech.pitch = 1; // Adjust pitch (0 to 2)
        speech.rate = 1;  // Adjust speed (0.1 to 10)
        speech.volume = 1; // Adjust volume (0 to 1)

        const voices = window.speechSynthesis.getVoices();
        speech.voice = voices.find(voice => voice.lang === 'en-US') || voices[0];

        window.speechSynthesis.speak(speech);
    } else {
        alert('Sorry, your browser does not support speech synthesis.');
    }
}

function downloadStory() {
    const storyText = document.getElementById('storyText').innerText;
    const genre = document.getElementById('genre').value;
    
    if (storyText === 'Your story will appear here...') {
        alert('Please generate a story first!');
        return;
    }

    const title = getStoryTitle(storyText);

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const margin = 10;
    const pageWidth = doc.internal.pageSize.getWidth() - 2 * margin;

    doc.setFontSize(16);
    doc.text(title, margin, margin + 10);
    doc.setFontSize(12);
    
    const textLines = doc.splitTextToSize(storyText, pageWidth);
    
    const lineHeight = 10;
    let yPosition = margin + 20;
    textLines.forEach((line) => {
        doc.text(line, margin, yPosition);
        yPosition += lineHeight;
    });

    // Save the PDF with the title as the filename
    doc.save(`${title}.pdf`);
}


function getStoryTitle(storyText) {
    const title = storyText.split(":")[0];
    return title.trim().replace(/\s+/g, '_');
}
