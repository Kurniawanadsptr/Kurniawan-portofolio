import React from 'react';

const blogPosts = [
  {
    id: 1,
    title: 'Fansite Jesslyn Elly',
    author: 'Kurniawan',
    date: 'Sept 12, 2024',
    excerpt: 'Jesslyn Elly Fansite is a website created to present various exclusive content such as schedules, theater performance recaps, timelines, and other interesting information, and provide the best experience for fans.',
    technology: ['NextJS', 'Express JS', 'Tailwind'],
    imageUrl: '/projects/fansite-lyn.png',
    avatarUrl: 'https://i.pravatar.cc/150?img=1',
    linkUrl: 'https://www.jesslynelly.com/'
  },
  {
    id: 2,
    title: 'Sistem Informasi Pegawai',
    author: 'Kurniawan',
    date: 'April 1, 2025',
    excerpt: 'A system designed to manage personnel data and information in an integrated and efficient manner.',
    technology: ['Codeigniter', 'Bootstrap', 'Javascript'],
    imageUrl: '/projects/sigawai.png',
    avatarUrl: 'https://i.pravatar.cc/150?img=1',
    linkUrl: '#'
  },
  {
    id: 3,
    title: 'Doorprize Application',
    author: 'Kurniawan',
    date: 'April 1, 2025',
    excerpt: 'Doorprize application used to automatically randomize the names of lottery participants to celebrate the anniversary of KAI Divre III Palembang',
    technology: ['PHP','Javascript','Bootstrap'],
    imageUrl: '/projects/Undian.png',
    avatarUrl: 'https://i.pravatar.cc/150?img=1',
    linkUrl: '#'
  },
];

const BlogPostCard = ({ post }) => {
  return (
    <div className='max-w-sm rounded-xl bg-[#1a1443] overflow-hidden mb-20 shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out cursor-pointer flex flex-col'>
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img className='w-full' src={post.imageUrl} alt='Sunset in the mountains' />
    <div className='px-6 py-4 flex-grow'>
      <div className='font-bold text-xl mb-2'>{post.title}</div>
      <p className='text-white text-base line-clamp-6'>{post.excerpt}</p>
    </div>
    <div className='px-6 pt-4 pb-2 flex flex-wrap gap-2 justify-start'>
    {post.technology.map((technologys, index) => ( 
      <span key={technologys} className='inline-block bg-[#1a1443] rounded-full py-1 text-sm font-semibold text-white mr-2 mb-2'> 
      `{technologys}`{index !== post.technology.length - 1 ? ',' : ''}
       </span> 
      ))}
    </div>
    {post.title !== "Coming Soon." ? (
    <div className='px-6 py-4 flex justify-between items-center'>
      <a href={post.linkUrl} target='_blank'>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl transition-all duration-300 transform hover:translate-y-1'>
          Preview
        </button>
      </a>
    </div>
    ) : (
    <div className='px-6 py-4 flex justify-between items-center'>
      <a href={post.linkUrl} target='_blank'>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl transition-all duration-300 transform hover:translate-y-1'>
          Coming Soon
        </button>
      </a>
    </div>
    )}
  </div>  
  );
};

export default function BlogPostList() {
  return (
    <div id='projects'>
    <div className="flex justify-center -translate-y-[1px]">
      <div className="w-full">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
      </div>
    </div>
    <div className='container mx-auto px-4 py-8'>
      <div className="flex justify-center my-3 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Projects
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {blogPosts.map(post => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
    </div>
  );
}