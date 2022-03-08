function ProjectsSection() {
    return (
        <section className='py-20'>
            <div className='container'>
                <h2 className='font-semibold text-3xl text-slate-200 mb-6 border-l-4 border-primary pl-5'>
                    Projects
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-7'>
                    {[...new Array(6).keys()].map((e) => (
                        <Project key={e} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProjectsSection;

const Project = () => {
    return (
        <div className='rounded-xl overflow-hidden relative group'>
            <img src='/img/me.jpg' alt='Project' className='w-full object-cover' />

            <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-dark z-10 flex flex-col justify-end items-start px-6 py-5 space-y-1 opacity-0 pointer-events-none duration-150 group-hover:opacity-100 group-hover:pointer-events-auto'>
                <h3 className='text-slate-100 font-semibold text-2xl -translate-y-5 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 duration-200 delay-150'>
                    Project Title
                </h3>

                <p className='text-sm text-slate-300 -translate-y-5 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 duration-200 delay-100'>
                    Lorem ipsum dolor sit ametconsectetur adipisicing elit.
                </p>

                <button
                    className='bg-primary text-dark border border-primary px-6 py-1.5 font-medium text-xs !mt-4 hover:bg-dark hover:text-white duration-200 rounded-full -translate-y-5 group-hover:translate-y-0 opacity-0 group-hover:opacity-100'
                    style={{
                        transitionDelay: 'transform 0.75s',
                    }}
                >
                    View Project
                </button>
            </div>
        </div>
    );
};
