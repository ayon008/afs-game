'use client'
import DOMPurify from 'dompurify'; // Import DOMPurify for sanitization

const Description = ({ description }) => {
    // Sanitize the description to prevent XSS attacks
    const sanitizedDescription = DOMPurify.sanitize(description);

    return (
        <p
            className='2xl:text-[22px] xl:text-base text-xs mt-2 text-[#00000080]'
            dangerouslySetInnerHTML={{ __html: sanitizedDescription }} // Render HTML safely
        />
    );
};

export default Description;
