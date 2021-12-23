import React from 'react'

function HeaderItem({ Icon, title}) {
    return (
        <div className='flex flex-col text-center cursor-pointer group
        w-12 sm:w-20 hover:text-white'>
            <Icon className="h-8 mb-1 group-hover:animate-bounce" />
            <p className='opacity-0 tracking-widest group-hover:opacity-100'>
                {title}
                </p>
        </div>
    )
}

export default HeaderItem
