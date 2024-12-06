document.addEventListener('DOMContentLoaded', function() {
    const content = [
        "<p><strong>Long time ago, on the mystical Lake Pepe, where frogs of all shapes and sizes lived in perfect harmony... well, sort of... there was born a very special Pepe. But this Pepe wasn’t like the others. Oh no. This Pepe had a secret. His skin was RED! Yes, RED! The other Pepe frogs, with their classic green skin...</strong></p>",
        
        "<h2>Act 1: The Birth of Quai Pepe</h2>",
        "<p>It was a bright, sunny day at Lake Pepe 🌞. The usual Pepe frogs were basking on their lilypads 🐸, discussing the latest memes and sharing dank frog wisdom. Suddenly, the water ripples, and out pops a small, red frog, blinking under the bright sun.</p>",
        "<p><strong>Pepe #1:</strong> “Uhh… dude, what’s up with your color? You good?”</p>",
        "<p><strong>Pepe #2:</strong> “Yeah, you look like a fire truck crossed with a strawberry... is that normal?” 🍓🚒</p>",
        "<p><strong>Quai Pepe:</strong> “I am... uh, <strong>special</strong>, okay? Get over it.”</p>",
        "<p>The other Peppes exchange confused looks. A couple of them whisper behind their webbed hands.</p>",
        "<p><strong>Pepe #3:</strong> “Is this some kind of new meme? Like, ‘Red Pepe’? Does it even exist?”</p>",
        "<p><strong>Quai Pepe:</strong> “Oh, I exist. And I’m here to stay. You’ll see. I’m gonna change the game.”</p>",

        "<h2>Act 2: The Struggle for Acceptance</h2>",
        "<p>Life at the lake wasn’t easy when you’re a red frog in a sea of green 🐸💚. Every time Quai Pepe hopped by, the other frogs snickered. One even tried to paint themselves red, thinking it would catch the “cool” vibe.</p>",
        "<p><strong>Pepe #4:</strong> <strong>covered in red paint, looking proud</strong> “Now, I’m just like him, right? Right?”</p>",
        "<p><strong>Quai Pepe:</strong> “You look like a tomato that’s had one too many drinks 🍅🍻.”</p>",
        "<p>But the real challenge came when the group of frogs gathered for their famous 'Pepe Meme-Off' 🏆. It was the biggest event of the year, where all the Pepe frogs competed to see who could create the funniest, most epic meme. Quai Pepe was ready to shine, but the others still didn’t take him seriously. They still called him 'Tomato Frog.'</p>",
        "<p><strong>Pepe #1:</strong> “Look, Quai Pepe, we get it. You’re ‘different,’ but we’re kind of thinking… maybe you just stick to… you know... being <strong>just</strong> a Pepe.”</p>",
        "<p><strong>Quai Pepe:</strong> “Well, you’ll see. When I win this Meme-Off, you’ll <strong>wish</strong> you had a little more red in you.”</p>",

        "<h2>Act 3: The Meme-Off Showdown</h2>",
        "<p>The day of the Meme-Off arrived 🎉. The lake was packed. The Peppes had their best memes ready. The competition was fierce 🔥, but Quai Pepe knew this was his moment.</p>",
        "<p>First up was Classic Pepe with his meme titled ‘When you see a notification, but it’s just an ad.’</p>",
        "<p><em>Everyone laughs.</em></p>",
        "<p><strong>Classic Pepe:</strong> <em>does his usual smirk</em></p>",
        "<p>Then came Pepe #2 with ‘When you realize you’ve been scrolling for 3 hours but don’t remember any of it.’</p>",
        "<p><em>The crowd snickers.</em></p>",
        "<p>But when it was Quai Pepe’s turn, he pulled out his secret weapon: a meme so powerful, so iconic, it could only come from a red frog with a <strong>passion</strong>. The meme featured a picture of Quai Pepe with the words:</p>",
        "<p><strong>“When you’re different, but your memes are still fire.”</strong> 🔥🔥</p>",
        "<p>He hits ‘post,’ and the lake erupts in laughter.</p>",
        "<p><strong>Pepe #1:</strong> <em>gasping</em> “Wait… that meme is fire…”</p>",
        "<p><strong>Pepe #3:</strong> <em>laughing hysterically</em> “This meme… <em>this meme</em> is the future!”</p>",
        "<p>Even the judges, the older frogs from the Grand Meme Council, couldn’t stop laughing. They declare Quai Pepe the Meme King 👑.</p>",
        "<p><strong>Grand Meme Frog:</strong> “You may be red, but your memes are the purest shade of gold.”</p>",

        "<h2>Act 4: The Rise of Quai Pepe</h2>",
        "<p>From that day forward, Quai Pepe became a legend. His red skin, once ridiculed, was now revered as the symbol of meme royalty 💎👑. The other frogs learned that being different wasn’t just okay—it was what made you stand out.</p>",
        "<p>Quai Pepe’s meme empire grew 🌍. He even started a popular trend, ‘Red Frog Energy,’ which became the slogan of the community.</p>",
        "<p><strong>Pepe #2:</strong> “Okay, fine. Red is the new green.”</p>",
        "<p><strong>Quai Pepe:</strong> <em>with a wink</em> “Told ya.”</p>",
        "<p>And they all lived happily (and meme-fully) ever after.</p>",

        "<p><strong>Will Quai Pepe continue to dominate the meme world? Or will his fellow Peppes challenge his crown? Stay tuned, fellow meme enthusiasts. The saga of Quai Pepe is just getting started…</strong> 😎💥</p>"
    ];

    let contentIndex = 0;
    let typedContent = document.getElementById('typed-content');
    
    function typeContent() {
        if (contentIndex < content.length) {
            let paragraph = content[contentIndex];
            let i = 0;
            typedContent.innerHTML = "";  // Clear previous content
            let typingEffect = setInterval(() => {
                typedContent.innerHTML += paragraph[i];
                i++;
                if (i === paragraph.length) {
                    clearInterval(typingEffect);
                    contentIndex++;
                    setTimeout(typeContent, 2000); // Add delay before the next paragraph
                }
            }, 100); // Adjust typing speed
        }
    }

    typeContent();
});
