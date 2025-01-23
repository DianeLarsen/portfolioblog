import Image from 'next/image'
import authorImage from '@/public/images/authors/dlarsen.jpg'

export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title no-underline'>Hey, I&#39;m Diane.</h1>
        <p className='mt-3 font-light text-muted-foreground'>
          I&#39;m a coder, storyteller, and gardening enthusiast with a
          passion for creating and problem-solving. Here, I share my projects,
          ideas, and the occasional glimpse into my stories, hoping to inspire
          and connect with like-minded people.
        </p>
      </div>
      <div className='relative'>
        <Image
          className='flex-1 rounded-lg grayscale'
          src={authorImage}
          alt='Diane Larsen'
          width={175}
          height={175}
          priority
        />
      </div>
    </section>
  )
}
