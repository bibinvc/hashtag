import React, { useState } from 'react';
import './HashtagGenerator.css';

const HashtagGenerator = () => {
  const [inputText, setInputText] = useState('');
  const [hashtags, setHashtags] = useState([]);

  const generateHashtags = () => {
    if (!inputText) return;

    // Static list of relevant hashtags (you can customize this based on your needs)
    const staticHashtags = [
      '#socialmedia',
      '#marketing',
      '#digital',
      '#content',
      '#community',
      '#branding',
      '#engagement',
      '#influencer',
      '#strategy',
      '#trending',
      '#creative',
      '#viral',
      '#campaign',
      '#online',
      '#platform',
      '#audience',
      '#followers',
      '#analytics',
      '#growth',
      '#presence',
      '#SEO',
      '#sharing',
      '#networking',
      '#post',
      '#shareable',
      '#storytelling',
      '#visual',
      '#brandawareness',
      // Additional 200 words
      '#inspiration',
      '#motivation',
      '#health',
      '#fitness',
      '#wellness',
      '#technology',
      '#innovation',
      '#startup',
      '#entrepreneur',
      '#leadership',
      '#success',
      '#mindfulness',
      '#creativity',
      '#foodie',
      '#travel',
      '#photography',
      '#design',
      '#music',
      '#art',
      '#fashion',
      '#style',
      '#beauty',
      '#lifestyle',
      '#book',
      '#film',
      '#podcast',
      // ... (add 150 more words)
    ];

    // Select a random subset of 28 hashtags from the static list
    const randomHashtags = shuffle(staticHashtags).slice(0, 28);

    setHashtags(randomHashtags);
  };

  // Shuffle function to randomize the order of static hashtags
  const shuffle = (array) => {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
  };

  return (
    <div className="hashtag-generator">
      <h1>Social Media Hashtag Generator</h1>
      <textarea
        placeholder="Enter your word here..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={generateHashtags}>Generate Hashtags</button>
      <div className="hashtags">
        {hashtags.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default HashtagGenerator;
