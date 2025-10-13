// "use client";
// import { useState, useEffect } from "react";

// export default function Home() {
//   const [stories, setStories] = useState([]);
//   const [title, setTitle] = useState("");
//   const [subtitle, setSubtitle] = useState("");
//   const [content, setContent] = useState("");
//   const [likedStories, setLikedStories] = useState([]);
//   const [expandedStories, setExpandedStories] = useState({});

//   useEffect(() => {
//     fetchStories();
//     const savedLikes = JSON.parse(localStorage.getItem("likedStories")) || [];
//     setLikedStories(savedLikes);
//   }, []);

//   const fetchStories = async () => {
//     const res = await fetch("/api/stories");
//     const data = await res.json();
//     setStories(data);
//   };

//   const handlePost = async () => {
//     if (!title.trim() || !subtitle.trim() || !content.trim()) return;
//     await fetch("/api/stories", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ title, subtitle, content }),
//     });
//     setTitle("");
//     setSubtitle("");
//     setContent("");
//     fetchStories();
//   };

//   const toggleLike = async (id) => {
//     const hasLiked = likedStories.includes(id);

//     await fetch(`/api/stories/${id}/like`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ action: hasLiked ? "unlike" : "like" }),
//     });

//     let updatedLikes;
//     if (hasLiked) {
//       updatedLikes = likedStories.filter((sid) => sid !== id);
//     } else {
//       updatedLikes = [...likedStories, id];
//     }
//     setLikedStories(updatedLikes);
//     localStorage.setItem("likedStories", JSON.stringify(updatedLikes));

//     fetchStories();
//   };

//   const toggleExpand = (id) => {
//     setExpandedStories((prev) => ({
//       ...prev,
//       [id]: !prev[id],
//     }));
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 py-10 px-4">
//       <div className="max-w-2xl mx-auto">
//         <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
//           📖 Mini Stories App
//         </h1>

//         {/* Post Form */}
//         <div className="bg-white p-5 rounded-xl shadow mb-8">
//           <input
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             placeholder="Story title..."
//             className="w-full border border-gray-300 rounded-lg p-3 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
//           />
//           <input
//             value={subtitle}
//             onChange={(e) => setSubtitle(e.target.value)}
//             placeholder="Story title..."
//             className="w-full border border-gray-300 rounded-lg p-3 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
//           />
//           <textarea
//             value={content}
//             onChange={(e) => setContent(e.target.value)}
//             placeholder="Write your story..."
//             className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none h-32 text-gray-800"
//           />
//           <button
//             onClick={handlePost}
//             className="mt-3 w-full py-2 bg-blue-600 hover:bg-blue-700 transition rounded-lg text-white font-semibold"
//           >
//             ✍️ Post Story
//           </button>
//         </div>

//         {/* Stories List */}
//         <div className="space-y-6">
//           {stories.map((story) => {
//             const hasLiked = likedStories.includes(story._id);
//             const expanded = expandedStories[story._id] || false;
//             const previewLimit = 200;

//             const displayContent =
//               story.content.length > previewLimit && !expanded
//                 ? story.content.slice(0, previewLimit) + "..."
//                 : story.content;

//             return (
//               <div
//                 key={story._id}
//                 className="bg-white rounded-xl shadow hover:shadow-md transition p-5"
//               >
//                 {/* Header */}
//                 <div className="flex items-center gap-3 mb-3">
//                   <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
//                     {story.title?.charAt(0) || "S"}
//                   </div>
//                   <div>
//                     <h2 className="text-lg font-semibold text-gray-900">
//                       {story.title}
//                     </h2>
//                     {/* <h2 className="text-sm font-semibold text-gray-500">
//                       {story.subtitle}
//                     </h2> */}
//                     <p className="text-xs text-gray-500">
//                       Posted {new Date(story.createdAt).toLocaleDateString()}
//                     </p>
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <p
//                   className="text-gray-800 text-base leading-relaxed whitespace-pre-line cursor-pointer"
//                   onClick={() => toggleExpand(story._id)}
//                 >
//                   {displayContent}
//                 </p>

//                 {/* See More Button */}
//                 {story.content.length > previewLimit && (
//                   <button
//                     onClick={() => toggleExpand(story._id)}
//                     className="text-blue-600 hover:underline text-sm mt-1"
//                   >
//                     {expanded ? "See less" : "See more"}
//                   </button>
//                 )}

//                 {/* Actions */}
//                 <div className="mt-4 flex items-center justify-between border-t pt-3">
//                   <button
//                     onClick={() => toggleLike(story._id)}
//                     className={`flex items-center gap-2 px-4 py-1.5 rounded-full font-medium transition ${
//                       hasLiked
//                         ? "bg-pink-600 text-white hover:bg-pink-700"
//                         : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//                     }`}
//                   >
//                     {hasLiked ? "💔 Unlike" : "❤️ Like"} {story.likes}
//                   </button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";
// import { useState, useEffect } from "react";

// export default function Home() {
//   const [stories, setStories] = useState([]);
//   const [title, setTitle] = useState("");
//   const [subtitle, setSubtitle] = useState("");
//   const [content, setContent] = useState("");
//   const [likedStories, setLikedStories] = useState([]);
//   const [expandedStories, setExpandedStories] = useState({});

//   useEffect(() => {
//     fetchStories();
//     const savedLikes = JSON.parse(localStorage.getItem("likedStories")) || [];
//     setLikedStories(savedLikes);
//   }, []);

//   const fetchStories = async () => {
//     const res = await fetch("/api/stories");
//     const data = await res.json();
//     setStories(data);
//   };

//   const handlePost = async () => {
//     if (!title.trim() || !subtitle.trim() || !content.trim()) return;
//     await fetch("/api/stories", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ title, subtitle, content }),
//     });
//     setTitle("");
//     setSubtitle("");
//     setContent("");
//     fetchStories();
//   };

//   const toggleLike = async (id) => {
//     const hasLiked = likedStories.includes(id);

//     await fetch(`/api/stories/${id}/like`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ action: hasLiked ? "unlike" : "like" }),
//     });

//     let updatedLikes;
//     if (hasLiked) {
//       updatedLikes = likedStories.filter((sid) => sid !== id);
//     } else {
//       updatedLikes = [...likedStories, id];
//     }
//     setLikedStories(updatedLikes);
//     localStorage.setItem("likedStories", JSON.stringify(updatedLikes));

//     fetchStories();
//   };

//   const toggleExpand = (id) => {
//     setExpandedStories((prev) => ({
//       ...prev,
//       [id]: !prev[id],
//     }));
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 py-10 px-4">
//       <div className="max-w-2xl mx-auto">
//         <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
//           📖 Mini Stories App
//         </h1>

//         {/* Post Form */}
//         <div className="bg-white p-5 rounded-xl shadow mb-8">
//           <input
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             placeholder="Story title..."
//             className="w-full border border-gray-300 rounded-lg p-3 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
//           />
//           <input
//             value={subtitle}
//             onChange={(e) => setSubtitle(e.target.value)}
//             placeholder="Story title..."
//             className="w-full border border-gray-300 rounded-lg p-3 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
//           />
//           <textarea
//             value={content}
//             onChange={(e) => setContent(e.target.value)}
//             placeholder="Write your story..."
//             className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none h-32 text-gray-800"
//           />
//           <button
//             onClick={handlePost}
//             className="mt-3 w-full py-2 bg-blue-600 hover:bg-blue-700 transition rounded-lg text-white font-semibold"
//           >
//             ✍️ Post Story
//           </button>
//         </div>

//         {/* Stories List */}
//         <div className="space-y-6">
//           {stories.map((story) => {
//             const hasLiked = likedStories.includes(story._id);
//             const expanded = expandedStories[story._id] || false;
//             const previewLimit = 200;

//             // **MODIFICATION STARTS HERE**
//             const needsTruncation = story.content.length > previewLimit;

//             const contentText = expanded
//               ? story.content
//               : story.content.slice(0, previewLimit);

//             const seeMoreLess = needsTruncation ? (
//               <span className="text-gray-800 hover:underline text-sm ml-1">
//                 {expanded ? "See less" : "See more"}
//               </span>
//             ) : null;

//             const displayContent = (
//               <>
//                 {contentText}
//                 {needsTruncation && !expanded && "..."}
//                 {seeMoreLess}
//               </>
//             );
//             // **MODIFICATION ENDS HERE**

//             return (
//               <div
//                 key={story._id}
//                 className="bg-white rounded-xl shadow hover:shadow-md transition p-5"
//               >
//                 {/* Header */}
//                 <div className="flex items-center gap-3 mb-3">
//                   <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
//                     {story.title?.charAt(0) || "S"}
//                   </div>
//                   <div>
//                     <h2 className="text-lg font-semibold text-gray-900">
//                       {story.title}
//                     </h2>
//                     {/* <h2 className="text-sm font-semibold text-gray-500">
//                       {story.subtitle}
//                     </h2> */}
//                     <p className="text-xs text-gray-500">
//                       Posted {new Date(story.createdAt).toLocaleDateString()}
//                     </p>
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <p
//                   className="text-gray-800 text-base leading-relaxed whitespace-pre-line cursor-pointer"
//                   onClick={() => needsTruncation && toggleExpand(story._id)} // Only expand/collapse if truncation is necessary
//                 >
//                   {displayContent}
//                 </p>

//                 {/* See More Button - REMOVED, functionality moved to displayContent */}
//                 {/* {story.content.length > previewLimit && (
//                   <button
//                     onClick={() => toggleExpand(story._id)}
//                     className="text-blue-600 hover:underline text-sm mt-1"
//                   >
//                     {expanded ? "See less" : "See more"}
//                   </button>
//                 )}
//                 */}

//                 {/* Actions */}
//                 <div className="mt-4 flex items-center justify-between border-t pt-3">
//                   <button
//                     onClick={() => toggleLike(story._id)}
//                     className={`flex items-center gap-2 px-4 py-1.5 rounded-full font-medium transition ${
//                       hasLiked
//                         ? "bg-pink-600 text-white hover:bg-pink-700"
//                         : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//                     }`}
//                   >
//                     {hasLiked ? "💔 Unlike" : "❤️ Like"} {story.likes}
//                   </button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [stories, setStories] = useState([]);
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [content, setContent] = useState("");
  const [likedStories, setLikedStories] = useState([]);
  const [expandedStories, setExpandedStories] = useState({});

  useEffect(() => {
    fetchStories();
    const savedLikes = JSON.parse(localStorage.getItem("likedStories")) || [];
    setLikedStories(savedLikes);
  }, []);

  const fetchStories = async () => {
    const res = await fetch("/api/stories");
    const data = await res.json();
    setStories(data);
  };

  const handlePost = async () => {
    if (!title.trim() || !subtitle.trim() || !content.trim()) return;
    await fetch("/api/stories", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, subtitle, content }),
    });
    setTitle("");
    setSubtitle("");
    setContent("");
    fetchStories();
  };

  const toggleLike = async (id) => {
    const hasLiked = likedStories.includes(id);

    await fetch(`/api/stories/${id}/like`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: hasLiked ? "unlike" : "like" }),
    });

    let updatedLikes;
    if (hasLiked) {
      updatedLikes = likedStories.filter((sid) => sid !== id);
    } else {
      updatedLikes = [...likedStories, id];
    }
    setLikedStories(updatedLikes);
    localStorage.setItem("likedStories", JSON.stringify(updatedLikes));

    fetchStories();
  };

  const toggleExpand = (id) => {
    setExpandedStories((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-0">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          📖 Mini Stories App
        </h1>

        {/* Post Form */}
        <div className="bg-white p-5 rounded-xl shadow mb-8">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Story title..."
            className="w-full border border-gray-300 rounded-lg p-3 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
          />
          <input
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
            placeholder="Story title..."
            className="w-full border border-gray-300 rounded-lg p-3 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your story..."
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none h-32 text-gray-800"
          />
          <button
            onClick={handlePost}
            className="mt-3 w-full py-2 bg-blue-600 hover:bg-blue-700 transition rounded-lg text-white font-semibold"
          >
            ✍️ Post Story
          </button>
        </div>

        {/* Stories List */}
        <div className="space-y-3">
          {stories.map((story) => {
            const hasLiked = likedStories.includes(story._id);
            const expanded = expandedStories[story._id] || false;
            const previewLimit = 200;

            const needsTruncation = story.content.length > previewLimit;

            const contentText = expanded
              ? story.content
              : story.content.slice(0, previewLimit);

            const seeMoreLess = needsTruncation ? (
              <span className="text-blue-600 hover:underline text-sm ml-1">
                {expanded ? "See less" : "See more"}
              </span>
            ) : null;

            const displayContent = (
              <>
                {contentText}
                {/* Only show ellipsis and "See more" if NOT expanded */}
                {needsTruncation && !expanded && "..."}
                {/* Only show "See more" if NOT expanded. If expanded, show "See less" at the end of content. */}
                {needsTruncation &&
                  (expanded ? (
                    // If expanded, display "See less" after content
                    <>
                      {" "}
                      {/* Add a space before "See less" */}
                      {seeMoreLess}
                    </>
                  ) : (
                    // If truncated, display "See more" after ellipsis
                    seeMoreLess
                  ))}
              </>
            );

            const finalDisplayContent = (
              <>
                {contentText}

                {needsTruncation && !expanded && (
                  <>
                    {"..."}
                    <span className="text-blue-600 hover:underline text-sm ml-1">
                      {"See more"}
                    </span>
                  </>
                )}
              </>
            );

            const contentOnly = expanded
              ? story.content
              : story.content.slice(0, previewLimit);

            const readMoreLink =
              needsTruncation && !expanded ? (
                <>
                  {"..."}
                  <span className="text-blue-600 hover:underline text-sm ml-1">
                    {"See more"}
                  </span>
                </>
              ) : null;

            // If expanded, the content is full, and we don't display a "See less" link at the end.
            const finalContent = (
              <>
                {contentOnly}
                {readMoreLink}
              </>
            );

            return (
              <div
                key={story._id}
                className="bg-white rounded-xl shadow hover:shadow-md transition p-4"
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                    {story.title?.charAt(0) || "S"}
                  </div>
                  <div>
                    <h2 className="text-md font-semibold text-gray-900">
                      {story.title}
                    </h2>
                    {/* <h2 className="text-sm font-semibold text-gray-500">
                      {story.subtitle}
                    </h2> */}
                    <p className="text-xs text-gray-500">
                      Posted {new Date(story.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <p
                  className="text-gray-800 text-base leading-relaxed whitespace-pre-line cursor-pointer"
                  onClick={() => needsTruncation && toggleExpand(story._id)}
                >
                  {finalContent}
                </p>

                {/* The "See More Button" section is completely removed as per the original requested modification */}

                {/* Actions */}
                <div className="mt-4 flex items-center justify-between border-t-1 border-gray-300 pt-2">
                  <button
                    onClick={() => toggleLike(story._id)}
                    className={`flex items-center gap-2 px-4 py-1.5 rounded-full font-medium transition ${
                      hasLiked
                        ? "bg-pink-600 text-white hover:bg-pink-700"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    {hasLiked ? "💔 Unlike" : "❤️ Like"} {story.likes}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
