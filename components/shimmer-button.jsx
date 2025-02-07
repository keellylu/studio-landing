export const ShimmerButton = ({
    className,
    children,
    href,
    ...props
  }) => {

    const Component = href ? 'a' : 'button';
    
    return (
      <Component
        style={{
          '--spread': '90deg',
          '--shimmer-color':  '#ffffff',
          '--radius': '15px',
          '--speed': '1.5s',
          '--cut': '1px',
          '--bg': 'radial-gradient(ellipse 80% 50% at 50% 120%,rgba(62, 61, 117),rgba(18, 18, 38))',
        }}
        className={`
            relative rounded-full inline-flex items-center flex text-white dark:text-black group relative cursor-pointer overflow-hidden whitespace-nowrap h-14 px-8 [background:var(--bg)] [border-radius:var(--radius)] transition-all shadow-[0_0_0_3px_rgba(255,255,255,0.3)_inset] hover:bg-opacity-20 duration-300 ${
            className || ''
          }
        `}
        href={href}
        {...props}
      >
        {/* spark container */}
        <div className='absolute inset-0 overflow-visible [container-type:size]'>
          {/* spark */}
          <div className='absolute inset-0 h-[100cqh] animate-slide [aspect-ratio:1] [border-radius:0] [mask:none] '>
            {/* spark before */}
            <div className='absolute inset-[-100%] w-auto rotate-0 animate-spin [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,hsl(0_0%_100%/1)_var(--spread),transparent_var(--spread))] [translate:0_0]' />
          </div>
        </div>
  
        {/* backdrop */}
        <div className='absolute [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]' />
        {/* content */}
        <div className='z-50 inset-y-0 flex items-center h-full'>{children}</div>
      </Component>
    )
  }