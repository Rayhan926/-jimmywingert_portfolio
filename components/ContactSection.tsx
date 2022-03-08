import { BsGithub, BsTwitter } from 'react-icons/bs';
import { GrLinkedinOption } from 'react-icons/gr';
function ContactSection() {
    return (
        <section className='pb-20'>
            <div className='container'>
                <h2 className='font-semibold text-3xl text-slate-200 mb-6 border-l-4 border-primary pl-5'>
                    Get in Touch
                </h2>

                <div className='grid grid-cols-1 gap-8 md:grid-cols-[70%,auto]'>
                    <div>
                        <p className='text-slate-400 md:w-[80%]'>
                            Although I’m not currently looking for any new opportunities, my inbox
                            is always open. Whether you have a question or just want to say hi, I’ll
                            try my best to get back to you!
                        </p>
                        <a
                            href='mailto:yourmail@gmail.com'
                            className='bg-primary inline-block text-dark border border-primary px-6 py-2 font-medium text-base !mt-5 hover:bg-dark hover:text-white duration-200 rounded-full'
                            style={{
                                transitionDelay: 'transform 0.75s',
                            }}
                        >
                            Say Hello
                        </a>
                    </div>

                    <div className='flex flex-col md:items-end md:justify-end'>
                        <ul className='flex items-center gap-3'>
                            <li>
                                <a
                                    href='#'
                                    className='w-8 h-8 overflow-hidden rounded-full border border-primary text-slate-200 flex items-center justify-center hover:bg-primary duration-200 hover:text-dark'
                                >
                                    <BsGithub />
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#'
                                    className='w-8 h-8 overflow-hidden rounded-full border border-primary text-slate-200 flex items-center justify-center hover:bg-primary duration-200 hover:text-dark'
                                >
                                    <GrLinkedinOption size={15} />
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#'
                                    className='w-8 h-8 overflow-hidden rounded-full border border-primary text-slate-200 flex items-center justify-center hover:bg-primary duration-200 hover:text-dark'
                                >
                                    <BsTwitter />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;
