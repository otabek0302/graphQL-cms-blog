"use client"
import { useEffect, useState } from "react";

const Form = ({ slug }) => {
  const [tag, setTag] = useState(null)
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", comment: "" });


  const onInputChange = (e) => {
    setFormData((prevState) => ({ ...prevState, [e.target.name]: e.target.value, }));
  };

  useEffect(() => {
    if (slug) {
      setTag(slug);
    }
  }, [slug])


  const handlePostSubmission = async (tag) => {
    try {
      setError(false);
      const { name, email, comment } = formData;

      if (!name || !email || !comment) {
        setError(true);
        return;
      }

      const commentObj = { name, email, comment, tag };

      const result = await fetch("/api/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(commentObj),
      });

      if (result.ok) {
        setSuccess(true);
        setError(false);
      }


    } catch (error) {
      console.log(error.message);
      setError(true);
    }
  };


  return (
    <section>
      <div className="bg-primary-content shadow-lg rounded-lg p-6 sm:p-8 pb-12 mb-8">
        <h3 className="mb-4 sm:mb-8 border-b pb-4 text-[4vw] capitalize sm:text-lg leading-none sm:leading-normal font-bold text-copy">Leave a Reply</h3>
        <div className="grid grid-cols-1 gap-4 mb-4">
          <textarea value={formData.comment} onChange={onInputChange} className="p-[2vw] sm:p-4 outline-none w-full rounded-sm sm:rounded-xl h-[25vw] sm:h-40 focus:ring-2 focus:ring-gray-200 bg-foreground border-[0.5px] border-border text-copy text-[8px] sm:text-base" name="comment" placeholder="Comment" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          <input type="text" value={formData.name} onChange={onInputChange} className="py-[1.5vw] sm:py-2 px-[2vw] sm:px-4 outline-none w-full rounded-sm sm:rounded-xl focus:ring-2 focus:ring-gray-200 bg-foreground border-[0.5px] border-border text-copy text-[8px] sm:text-base" placeholder="Name" name="name" />
          <input type="email" value={formData.email} onChange={onInputChange} className="py-[1.5vw] sm:py-2 px-[2vw] sm:px-4 outline-none w-full rounded-sm sm:rounded-xl focus:ring-2 focus:ring-gray-200 bg-foreground border-[0.5px] border-border text-copy text-[8px] sm:text-base" placeholder="Email" name="email" />
        </div>
        {error && <p className="text-xs text-error">All fields are mandatory</p>}
        <div className="mt-8 flex-center sm:flex-none">
          <button type="button" onClick={() => handlePostSubmission(tag)} className="transition duration-500 ease hover:bg-primary-dark inline-block bg-primary text-lg font-medium rounded-lg sm:rounded-xl text-white px-[4vw] sm:px-8 py-[2vw] sm:py-3 cursor-pointer">Post Comment</button>
          {success && <span className="text-xl float-right font-semibold mt-3 text-green-500">Comment submitted for review</span>}
        </div>
      </div>
    </section>
  )
}

export default Form