import Head from 'next/head';
import { PostCard, PostWidget, Categories } from '../components';

type Post = {title: string, excerpt: string}

const posts: Post[] = [
  {title: "React blog", excerpt: "How to create a blog with react"},
  {title: "Angular blog", excerpt: "How to create a blog with Angular"},
]

const Home = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Ali's Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
          {posts.map((post: Post) => <PostCard post={ post } key={post.title}/>)}
        </div>
        <div className='lg:col-span-4 col-span-1'>
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Home
