import Image from 'next/image';
import { ReactNode } from 'react';

const skills = ['JavaScript (ES6+)', 'TypeScript', 'React', 'Eleventy', 'Node.js', 'WordPress'];

function AboutMeSection() {
    return (
        <section className='py-20'>
            <div className='container'>
                <h2 className='font-semibold text-3xl text-slate-200 mb-6 border-l-4 border-primary pl-5'>
                    About Me
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-[60%,auto] gap-10 md:gap-14 place-items-center md:place-items-start'>
                    <div className='text-slate-400 space-y-5'>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse fugit
                            cupiditate voluptatem tempora cumque, sequi, id culpa facilis eum
                            mollitia doloremque asperiores
                        </p>
                        <p>
                            illo magni aliquam non. Fugiat, quas doloremque. Maiores doloribus cum
                            facere deserunt illum explicabo! Quod doloribus omnis veniam laboriosam
                            numquam, animi obcaecati sequi architecto quaerat
                        </p>

                        {/* Skills --Start-- */}
                        <div>
                            <p>Here are a few technologies I’ve been working with recently:</p>
                            <div className='grid grid-cols-2 md:grid-cols-[200px,200px] gap-x-5 gap-y-1.5 mt-5'>
                                {skills.map((skill, index) => (
                                    <Skill name={skill} key={index} />
                                ))}
                            </div>
                        </div>
                        {/* Skills --End-- */}
                    </div>

                    <div>
                        <div className='overflow-hidden rounded-lg'>
                            <img src='/img/me.jpg' className='w-full' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMeSection;

type SkillProps = {
    name: ReactNode;
};
const Skill = ({ name }: SkillProps) => {
    return (
        <div className='flex items-center gap-4 text-slate-400 text-sm'>
            <div className='text-primary'>
                <svg
                    stroke='currentColor'
                    fill='currentColor'
                    strokeWidth={0}
                    viewBox='0 0 24 24'
                    height='1em'
                    width='1em'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path d='m9 19 8-7-8-7z' />
                </svg>
            </div>

            <span>{name}</span>
        </div>
    );
};
