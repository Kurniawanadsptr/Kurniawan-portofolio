// ScrollLink.js
'use client'; // This directive marks the file as a Client Component

import Link from "next/link";
import { useEffect } from "react";

function scrollToSection(event) {
  event.preventDefault();
  const element = event.target.closest('a'); // Ensure we get the closest anchor tag
  const sectionId = element.getAttribute('href');
  console.log('Element:', element); // Log the element
  console.log('Section ID:', sectionId); // Log the section ID
  const section = document.querySelector(sectionId);

  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  } else {
    console.error(`Element with id ${sectionId} not found`);
  }
}

export default function ScrollLink({ href, children, ...props }) {
  useEffect(() => {
    // Check for the element after the component mounts
    const section = document.querySelector(href);
    if (!section) {
      console.error(`Element with id ${href} not found`);
    }
  }, [href]);

  return (
    <Link href={href} scroll={false} onClick={scrollToSection} {...props}>
      {children}
    </Link>
  );
}
