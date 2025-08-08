import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGreaterThan, faCheck, faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-full py-10 gap-20">
      <header className='bg-custom-bg'>
        <div className="flex w-11/12 mx-auto justify-between @container">
          <div className='grow-4'>
            <svg xmlns="http://www.w3.org/2000/svg" width="103" height="38" viewBox="0 0 103 38" fill="none">
              <path d="M45 25.5005V7H49.176V21.8511H56.4585V25.5005H45Z" fill="#000958" />
              <path d="M63.3571 25.9314C61.7444 25.9314 60.5052 25.416 59.6395 24.3854C58.7737 23.3548 58.3408 21.7835 58.3408 19.6716V11.6125H62.415V19.8743C62.415 20.6177 62.6272 21.2091 63.0515 21.6484C63.4759 22.0876 64.0446 22.3073 64.7576 22.3073C65.4875 22.3073 66.0817 22.0792 66.54 21.623C66.9984 21.1668 67.2275 20.5502 67.2275 19.773V11.6125H71.3017V25.5005H68.0678V22.2566C67.4907 24.7064 65.9798 25.9314 63.5353 25.9314H63.3571Z" fill="#000958" />
              <path d="M81.3223 25.982C80.117 25.982 79.0646 25.7878 78.1649 25.3992C77.2821 24.9937 76.5437 24.453 75.9495 23.7772C75.3554 23.1014 74.914 22.3411 74.6254 21.4963C74.3369 20.6346 74.1926 19.7476 74.1926 18.8353V18.3537C74.1926 17.0866 74.4557 15.9039 74.9819 14.8057C75.5252 13.7075 76.323 12.8205 77.3755 12.1447C78.445 11.4688 79.7521 11.1309 81.2968 11.1309C82.553 11.1309 83.6649 11.3759 84.6326 11.8659C85.6002 12.339 86.3725 13.0063 86.9497 13.868C87.5269 14.7297 87.8494 15.7181 87.9173 16.8332H83.9196C83.8517 16.208 83.597 15.6843 83.1557 15.2619C82.7143 14.8226 82.0947 14.603 81.2968 14.603C80.2613 14.603 79.4974 14.9747 79.0051 15.7181C78.5129 16.4446 78.2667 17.4076 78.2667 18.6072C78.2667 19.7392 78.4959 20.6769 78.9542 21.4203C79.4295 22.1468 80.2189 22.51 81.3223 22.51C82.1371 22.51 82.7737 22.2988 83.2321 21.8765C83.6904 21.4541 83.962 20.8965 84.0469 20.2038H88.0192C87.9513 21.3527 87.6203 22.3664 87.0261 23.245C86.4489 24.1067 85.6596 24.7825 84.658 25.2724C83.6734 25.7455 82.5615 25.982 81.3223 25.982Z" fill="#000958" />
              <path d="M93.1711 25.1964L88.8933 11.6125H92.9929L96.074 22.0285H96.5832L99.1296 11.6125H103L99.1041 26.6156C98.8155 27.6969 98.4251 28.5586 97.9328 29.2006C97.4575 29.8427 96.8124 30.2988 95.9976 30.5692C95.1997 30.8564 94.1897 31 92.9674 31H90.472V27.5533H93.3748C94.0199 27.5533 94.5207 27.4266 94.8772 27.1732C95.2506 26.9197 95.5223 26.4636 95.692 25.8046L95.8193 25.1964H93.1711Z" fill="#000958" />
              <path d="M16.5062 25.9395C18.4079 25.9395 18.4079 27.8592 20.334 27.8592C23.2047 27.8592 23.4762 24.1622 21.5771 22.2769C19.6779 20.3917 19.6754 17.8779 16.5062 17.8779C13.3371 17.8779 13.3371 20.3917 11.4354 22.2769C9.53381 24.1622 9.80781 27.9328 12.6785 27.9328C14.6046 27.9328 14.6046 25.9395 16.5062 25.9395Z" fill="#000958" />
              <path d="M13.2029 15.9642C14.5773 15.7671 15.4717 14.0753 15.2006 12.1854C14.9296 10.2956 13.5957 8.92345 12.2213 9.12059C10.8468 9.31773 9.95241 11.0095 10.2235 12.8993C10.4945 14.7892 11.8285 16.1613 13.2029 15.9642Z" fill="#000958" />
              <path d="M22.7839 12.8858C23.055 10.996 22.1605 9.30423 20.7861 9.10709C19.4117 8.90996 18.0778 10.2821 17.8067 12.1719C17.5357 14.0618 18.4301 15.7536 19.8045 15.9507C21.1789 16.1478 22.5128 14.7757 22.7839 12.8858Z" fill="#000958" />
              <path d="M8.93682 20.2525C9.87392 19.7985 10.1429 18.4176 9.5376 17.1682C8.93231 15.9187 7.68195 15.2738 6.74486 15.7278C5.80776 16.1818 5.53878 17.5627 6.14408 18.8122C6.74937 20.0616 7.99973 20.7065 8.93682 20.2525Z" fill="#000958" />
              <path d="M26.8611 18.7967C27.4664 17.5472 27.1974 16.1663 26.2603 15.7123C25.3232 15.2584 24.0729 15.9032 23.4676 17.1527C22.8623 18.4022 23.1312 19.7831 24.0683 20.237C25.0054 20.691 26.2558 20.0461 26.8611 18.7967Z" fill="#000958" />
              <path d="M16.6587 0C26.7883 0 35 8.2117 35 18.3413C35 29.4827 25.4087 39.5433 12.6202 36.6827C10.2644 36.0096 6.56249 34.3269 4.54326 33.3173C2.52403 32.3077 2.86057 31.803 3.02884 31.6347C3.19711 31.4664 3.87018 31.1299 5.04807 31.6347C5.34307 31.7611 5.67367 31.91 6.03427 32.0724C7.11345 32.5583 8.46131 33.1652 9.92788 33.6539C10.9375 33.9904 12.6202 33.9904 13.4615 33.4856C13.9247 33.2077 14.6094 32.2776 14.1346 31.8029C13.7981 31.4663 12.7885 31.4663 11.1058 31.9712C9.42308 32.476 8.58173 31.6346 9.59135 30.9615C10.601 30.2885 12.2837 29.9519 14.4712 30.1202C15.217 30.1776 15.8259 30.2545 16.4313 30.331C17.6014 30.4788 18.7583 30.625 20.8654 30.625C27.6559 30.625 31.6346 24.6708 31.6346 18.3413C31.6346 10.0704 24.9296 3.36538 16.6587 3.36538C8.38766 3.36538 1.68269 10.0704 1.68269 18.3413C1.68269 23.1594 3.95792 27.446 7.49255 30.1855C2.95172 26.8817 0 21.5258 0 15.4806C0 6.35168 7.61916 0 16.6587 0Z" fill="url(#paint0_linear_11_1219)" />
              <defs>
                <linearGradient id="paint0_linear_11_1219" x1="17.5" y1="0" x2="18.5" y2="47" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FF592C" />
                  <stop offset="1" stopColor="#FF592C" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <label htmlFor="status-side-navigation" className="text-black text-3xl hidden max-sm:block md:max-custom-lg:block 
          md:max-custom-lg:grow md:max-custom-lg:text-right md:max-custom-lg:mr-10 peer md:w-11/12">&#9776;
            <input id="status-side-navigation" type="checkbox" className="hidden" />
          </label>
          <div className="fixed top-0 right-0 h-full max-sm:w-full  bg-white opacity-0 pointer-events-none translate-x-120
                          transition duration-400 ease-in-out peer-has-checked:opacity-100 peer-has-checked:translate-x-0
                          peer-has-checked:pointer-events-auto z-50 md:max-custom-lg:w-1/2
                          ">
            <ul className="text-black text-2xl h-2/5 flex flex-col justify-between items-center px-5 py-11 relative">
              <label htmlFor="status-side-navigation" className="absolute right-4 top-0 text-5xl text-red-500">
                &times;
              </label>
              <li>Home</li>
              <li>About</li>
              <li>Services & Rates</li>
              <li>Review</li>
              <li>Contacts us</li>
              <li className="max-sm:block hidden">Sign Up</li>
            </ul>
          </div>
          <label htmlFor='status-side-navigation' className='bg-[var(--color-modal)] fixed top-0 right-0 h-full w-full opacity-0 pointer-events-none transition-opacity duration-500
            ease-in peer-has-checked:opacity-100 z-40 peer-has-checked:pointer-events-auto
            '></label>
          <nav className="hidden lg:block grow-2">
            <ul className='flex justify-between items-center h-full'>
              <li>Home</li>
              <li>About</li>
              <li>Services & Rates</li>
              <li>Review</li>
              <li>Contacts us</li>
            </ul>
          </nav>
          <div className='md:block hidden grow-4'>
            <div className='flex justify-end items-center'>
              <div className="rounded-3xl border border-blue-950 w-28 h-10 md:flex justify-center items-center ">
                <button className='md:text-xl lg:text-base text-blue-950 font-semibold'>Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className='grid grid-cols-1 gap-28'>
        <section>
          <div className="w-11/12 mx-auto flex flex-col @container lg:flex-row lg:justify-between">
            <div className="lg:ml-52 @md:h-[var(--height-516)] w-full bg-cover bg-[center] h-80 bg-[url('/images/heroImg.png')] 
            bg-no-repeat rounded-2xl relative lg:w-1/5 @5xl:h-[21.875rem]">
              <div className="@md:left-2/5 @md:w-60  @md:flex-col @md:justify-between w-48 h-fit lg:z-[1] bg-white
               absolute bottom-0 left-3/12 rounded-md p-2.5 flex justify-between items-center
               lg:top-[330px] @5xl:left-[14%]">
                <div className='@md:flex @md:w-full @md:pl-3.5 @md:pt-3.5'>
                  <img className="h-12 rounded-xl @md:mr-4" src="/images/petHealth.png" alt="petHealth" />
                  <div className='@md:grid @md:grid-cols-1 @md:gap-2'>
                    <h2 className="text-[var(--primary-color)] text-sm font-semibold">Pet Health</h2>
                    <div className="w-28 h-1 opacity-10 bg-blue-950 rounded-[10px]"></div>
                    <div className="w-10 h-1 opacity-10 bg-blue-950 rounded-[10px]"></div>
                  </div>
                </div>


                <div className='@md:flex @md:w-full @md:pl-3.5 @md:pt-3.5'>
                  <img className="h-12 rounded-xl @md:mr-4" src="/images/pet-care.png" alt="petHealth" />
                  <div className='@md:grid @md:grid-cols-1 @md:gap-2'>
                    <h2 className="text-[var(--primary-color)] text-sm font-semibold">Pet Health</h2>
                    <div className="w-28 h-1 opacity-10 bg-blue-950 rounded-[10px]"></div>
                    <div className="w-10 h-1 opacity-10 bg-blue-950 rounded-[10px]"></div>
                  </div>
                </div>
              </div>
              <svg className='lg:block sm:hidden md:hidden absolute right-[-42px] top-[10px] z-[-1]' width="51" height="102" viewBox="0 0 51 102" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M29.9381 2.1582C29.9381 1.32978 29.2665 0.658203 28.4381 0.658203C27.6097 0.658203 26.9381 1.32978 26.9381 2.1582L26.9381 28.9686C26.9381 29.7971 27.6097 30.4686 28.4381 30.4686C29.2665 30.4686 29.9381 29.7971 29.9381 28.9686L29.9381 2.1582Z" fill="url(#paint0_linear_11_1245)" />
                <path d="M50.9811 2.1582C50.9811 1.32978 50.3095 0.658203 49.4811 0.658203C48.6527 0.658203 47.9811 1.32978 47.9811 2.1582L47.9811 99.9876C47.9811 100.816 48.6527 101.488 49.4811 101.488C50.3095 101.488 50.9811 100.816 50.9811 99.9876L50.9811 2.1582Z" fill="url(#paint1_linear_11_1245)" />
                <path d="M28.4381 71.6777C29.2665 71.6777 29.9381 72.3493 29.9381 73.1777L29.9381 99.9882C29.9381 100.817 29.2665 101.488 28.4381 101.488C27.6097 101.488 26.9381 100.817 26.9381 99.9882L26.9381 73.1777C26.9381 72.3493 27.6097 71.6777 28.4381 71.6777Z" fill="url(#paint2_linear_11_1245)" />
                <path d="M28.9454 66.7861C29.7739 66.7861 30.4454 66.1146 30.4454 65.2861C30.4454 64.4577 29.7739 63.7861 28.9454 63.7861L2.13501 63.7861C1.30658 63.7861 0.63501 64.4577 0.63501 65.2861C0.63501 66.1146 1.30658 66.7861 2.13501 66.7861H28.9454Z" fill="url(#paint3_linear_11_1245)" />
                <path d="M42.4669 0.658203C43.2953 0.658203 43.9669 1.32978 43.9669 2.1582L43.9669 99.9876C43.9669 100.816 43.2953 101.488 42.4669 101.488C41.6385 101.488 40.9669 100.816 40.9669 99.9876L40.9669 2.1582C40.9669 1.32978 41.6385 0.658203 42.4669 0.658203Z" fill="url(#paint4_linear_11_1245)" />
                <path d="M22.9244 2.1582C22.9244 1.32978 22.2529 0.658203 21.4244 0.658203C20.596 0.658203 19.9244 1.32978 19.9244 2.1582L19.9244 28.9686C19.9244 29.7971 20.596 30.4686 21.4244 30.4686C22.2529 30.4686 22.9244 29.7971 22.9244 28.9686L22.9244 2.1582Z" fill="url(#paint5_linear_11_1245)" />
                <path d="M21.4244 71.6777C22.2529 71.6777 22.9244 72.3493 22.9244 73.1777L22.9244 99.9882C22.9244 100.817 22.2529 101.488 21.4244 101.488C20.596 101.488 19.9244 100.817 19.9244 99.9882L19.9244 73.1777C19.9244 72.3493 20.596 71.6777 21.4244 71.6777Z" fill="url(#paint6_linear_11_1245)" />
                <path d="M28.9454 59.7715C29.7739 59.7715 30.4454 59.0999 30.4454 58.2715C30.4454 57.4431 29.7739 56.7715 28.9454 56.7715L2.13501 56.7715C1.30658 56.7715 0.63501 57.4431 0.63501 58.2715C0.63501 59.0999 1.30658 59.7715 2.13501 59.7715L28.9454 59.7715Z" fill="url(#paint7_linear_11_1245)" />
                <path d="M30.4454 44.2441C30.4454 45.0726 29.7739 45.7441 28.9454 45.7441L2.13501 45.7441C1.30658 45.7441 0.63501 45.0726 0.63501 44.2441C0.63501 43.4157 1.30658 42.7441 2.13501 42.7441L28.9454 42.7441C29.7739 42.7441 30.4454 43.4157 30.4454 44.2441Z" fill="url(#paint8_linear_11_1245)" />
                <path d="M36.9528 2.1582C36.9528 1.32978 36.2812 0.658203 35.4528 0.658203C34.6243 0.658203 33.9528 1.32978 33.9528 2.1582L33.9528 99.9876C33.9528 100.816 34.6243 101.488 35.4528 101.488C36.2812 101.488 36.9528 100.816 36.9528 99.9876L36.9528 2.1582Z" fill="url(#paint9_linear_11_1245)" />
                <path d="M14.4098 0.658203C15.2382 0.658203 15.9098 1.32978 15.9098 2.1582L15.9098 28.9686C15.9098 29.7971 15.2382 30.4686 14.4098 30.4686C13.5814 30.4686 12.9098 29.7971 12.9098 28.9686L12.9098 2.1582C12.9098 1.32978 13.5814 0.658203 14.4098 0.658203Z" fill="url(#paint10_linear_11_1245)" />
                <path d="M15.9098 73.1777C15.9098 72.3493 15.2382 71.6777 14.4098 71.6777C13.5814 71.6777 12.9098 72.3493 12.9098 73.1777L12.9098 99.9882C12.9098 100.817 13.5814 101.488 14.4098 101.488C15.2382 101.488 15.9098 100.817 15.9098 99.9882L15.9098 73.1777Z" fill="url(#paint11_linear_11_1245)" />
                <path d="M30.4454 51.2578C30.4454 52.0862 29.7739 52.7578 28.9454 52.7578L2.13501 52.7578C1.30658 52.7578 0.63501 52.0862 0.63501 51.2578C0.63501 50.4294 1.30658 49.7578 2.13501 49.7578L28.9454 49.7578C29.7739 49.7578 30.4454 50.4294 30.4454 51.2578Z" fill="url(#paint12_linear_11_1245)" />
                <path d="M28.9454 38.7295C29.7739 38.7295 30.4454 38.0579 30.4454 37.2295C30.4454 36.4011 29.7739 35.7295 28.9454 35.7295L2.13501 35.7295C1.30658 35.7295 0.63501 36.4011 0.63501 37.2295C0.63501 38.0579 1.30658 38.7295 2.13501 38.7295L28.9454 38.7295Z" fill="url(#paint13_linear_11_1245)" />
                <defs>
                  <linearGradient id="paint0_linear_11_1245" x1="46.9861" y1="26" x2="25.4861" y2="87" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FFD7CB" />
                    <stop offset="1" stop-color="#FFD7CB" stop-opacity="0" />
                  </linearGradient>
                  <linearGradient id="paint1_linear_11_1245" x1="46.9861" y1="26" x2="25.4861" y2="87" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FFD7CB" />
                    <stop offset="1" stop-color="#FFD7CB" stop-opacity="0" />
                  </linearGradient>
                  <linearGradient id="paint2_linear_11_1245" x1="46.9861" y1="26" x2="25.4861" y2="87" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FFD7CB" />
                    <stop offset="1" stop-color="#FFD7CB" stop-opacity="0" />
                  </linearGradient>
                  <linearGradient id="paint3_linear_11_1245" x1="46.9861" y1="26" x2="25.4861" y2="87" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FFD7CB" />
                    <stop offset="1" stop-color="#FFD7CB" stop-opacity="0" />
                  </linearGradient>
                  <linearGradient id="paint4_linear_11_1245" x1="46.9861" y1="26" x2="25.4861" y2="87" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FFD7CB" />
                    <stop offset="1" stop-color="#FFD7CB" stop-opacity="0" />
                  </linearGradient>
                  <linearGradient id="paint5_linear_11_1245" x1="46.9861" y1="26" x2="25.4861" y2="87" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FFD7CB" />
                    <stop offset="1" stop-color="#FFD7CB" stop-opacity="0" />
                  </linearGradient>
                  <linearGradient id="paint6_linear_11_1245" x1="46.9861" y1="26" x2="25.4861" y2="87" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FFD7CB" />
                    <stop offset="1" stop-color="#FFD7CB" stop-opacity="0" />
                  </linearGradient>
                  <linearGradient id="paint7_linear_11_1245" x1="46.9861" y1="26" x2="25.4861" y2="87" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FFD7CB" />
                    <stop offset="1" stop-color="#FFD7CB" stop-opacity="0" />
                  </linearGradient>
                  <linearGradient id="paint8_linear_11_1245" x1="46.9861" y1="26" x2="25.4861" y2="87" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FFD7CB" />
                    <stop offset="1" stop-color="#FFD7CB" stop-opacity="0" />
                  </linearGradient>
                  <linearGradient id="paint9_linear_11_1245" x1="46.9861" y1="26" x2="25.4861" y2="87" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FFD7CB" />
                    <stop offset="1" stop-color="#FFD7CB" stop-opacity="0" />
                  </linearGradient>
                  <linearGradient id="paint10_linear_11_1245" x1="46.9861" y1="26" x2="25.4861" y2="87" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FFD7CB" />
                    <stop offset="1" stop-color="#FFD7CB" stop-opacity="0" />
                  </linearGradient>
                  <linearGradient id="paint11_linear_11_1245" x1="46.9861" y1="26" x2="25.4861" y2="87" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FFD7CB" />
                    <stop offset="1" stop-color="#FFD7CB" stop-opacity="0" />
                  </linearGradient>
                  <linearGradient id="paint12_linear_11_1245" x1="46.9861" y1="26" x2="25.4861" y2="87" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FFD7CB" />
                    <stop offset="1" stop-color="#FFD7CB" stop-opacity="0" />
                  </linearGradient>
                  <linearGradient id="paint13_linear_11_1245" x1="46.9861" y1="26" x2="25.4861" y2="87" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FFD7CB" />
                    <stop offset="1" stop-color="#FFD7CB" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
              <svg className='lg:block sm:hidden md:hidden absolute left-[-69px] bottom-0 z-[-1]' width="232" height="232" viewBox="0 0 232 232" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M51.7229 115.109C51.7229 85.4309 75.7818 61.3721 105.46 61.3721C135.138 61.3721 159.197 85.4309 159.197 115.109C159.197 115.937 159.868 116.609 160.697 116.609C161.525 116.609 162.197 115.937 162.197 115.109C162.197 83.7741 136.795 58.3721 105.46 58.3721C74.1249 58.3721 48.7229 83.7741 48.7229 115.109C48.7229 118.961 49.1071 122.726 49.8396 126.365C50.0031 127.177 50.794 127.703 51.6061 127.539C52.4183 127.376 52.9441 126.585 52.7806 125.773C52.0871 122.327 51.7229 118.761 51.7229 115.109Z" fill="url(#paint0_linear_11_1244)" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M112.035 40.8369C69.8053 40.8369 35.571 75.0712 35.571 117.301C35.571 159.532 69.8053 193.766 112.035 193.766C154.266 193.766 188.5 159.532 188.5 117.301C188.5 75.0712 154.266 40.8369 112.035 40.8369ZM38.571 117.301C38.571 76.7281 71.4622 43.8369 112.035 43.8369C152.609 43.8369 185.5 76.7281 185.5 117.301C185.5 157.875 152.609 190.766 112.035 190.766C71.4622 190.766 38.571 157.875 38.571 117.301Z" fill="url(#paint1_linear_11_1244)" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.7893 116.863C19.7893 65.6744 61.2857 24.178 112.474 24.178C163.663 24.178 205.159 65.6744 205.159 116.863C205.159 168.051 163.663 209.548 112.474 209.548C61.2857 209.548 19.7893 168.051 19.7893 116.863ZM112.474 27.178C62.9426 27.178 22.7893 67.3313 22.7893 116.863C22.7893 166.394 62.9426 206.548 112.474 206.548C162.006 206.548 202.159 166.394 202.159 116.863C202.159 67.3313 162.006 27.178 112.474 27.178Z" fill="url(#paint2_linear_11_1244)" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M115.981 0.503906C52.2026 0.503906 0.5 52.2065 0.5 115.985C0.5 179.763 52.2026 231.466 115.981 231.466C179.759 231.466 231.462 179.763 231.462 115.985C231.462 52.2065 179.759 0.503906 115.981 0.503906ZM3.5 115.985C3.5 53.8634 53.8595 3.50391 115.981 3.50391C178.103 3.50391 228.462 53.8634 228.462 115.985C228.462 178.107 178.103 228.466 115.981 228.466C53.8595 228.466 3.5 178.107 3.5 115.985Z" fill="url(#paint3_linear_11_1244)" />
                <defs>
                  <linearGradient id="paint0_linear_11_1244" x1="115.981" y1="0.503906" x2="115.981" y2="231.466" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FF9771" stop-opacity="0.84" />
                    <stop offset="0.954425" stop-color="#FF9771" stop-opacity="0" />
                  </linearGradient>
                  <linearGradient id="paint1_linear_11_1244" x1="115.981" y1="0.503906" x2="115.981" y2="231.466" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FF9771" stop-opacity="0.84" />
                    <stop offset="0.954425" stop-color="#FF9771" stop-opacity="0" />
                  </linearGradient>
                  <linearGradient id="paint2_linear_11_1244" x1="115.981" y1="0.503906" x2="115.981" y2="231.466" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FF9771" stop-opacity="0.84" />
                    <stop offset="0.954425" stop-color="#FF9771" stop-opacity="0" />
                  </linearGradient>
                  <linearGradient id="paint3_linear_11_1244" x1="115.981" y1="0.503906" x2="115.981" y2="231.466" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FF9771" stop-opacity="0.84" />
                    <stop offset="0.954425" stop-color="#FF9771" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>

              <div className=' absolute bottom-[-164px] right-[-168px] z-0 hidden lg:block'>
                <div className='relative w-48 h-60 '>
                  <img src="/images/hero-child.png" className="absolute z-10 rounded-2xl" alt="" />
                  <div className='w-full h-full bg-rose-300 absolute rounded-2xl'></div>
                </div>
              </div>
            </div>

            <div className="mt-6 lg:w-1/2 lg:px-20 lg:pt-8">
              <h1 className="text-[var(--primary-color)] font-[--font-sora] text-4xl text-center font-extrabold @md:text-5xl lg:text-6xl lg:w-[var(--width-517)] lg:text-left">Established &
                Trusted Pet
                Care Service</h1>
              <p className="text-center font-[--font-poppins] text-[var(--color-p)]] text-3xl mt-3 md:text-4xl
               lg:w-96 text-slate-500 lg:text-base lg:font-normal lg:leading-loose lg:text-left
              ">Discover a wide variety of Pawsitive services to choose from, including daycare, private walks, office duty and spa.</p>
              <div className="flex flex-col items-center mt-7 @md:flex-row ">

                <div className="group hover:bg-transparent hover:cursor-pointer hover:border-[var(--color-btn)] hover:border-2 w-full h-14 rounded-4xl bg-[var(--color-btn)] flex justify-center items-center md:w-1/2 lg:w-48">
                  <p className=" text-white text-center font-semibold mr-3 text-3xl lg:text-base group-hover:text-[var(--color-btn)]" >
                    Book a Meet
                  </p>
                  <div className='w-8 h-8 lg:w-5 lg:h-5 bg-white text-[var(--color-btn)] rounded-full flex justify-center items-center group-hover:bg-[var(--color-btn)]'>
                    <FontAwesomeIcon icon={faGreaterThan} className="fa-solid text-[10px] md:text-[15px] lg:text-[10px] group-hover:text-white" />
                  </div>
                </div>
                <div className='mt-5 @md:flex @md:justify-center @md:w-1/2 @md:items-center @md:mt-0'>
                  <a href="#scheduleCalling" className='text-[var(--primary-color)] font-poppins font-medium underline
              decoration-solid decoration-auto underline-offset-auto text-3xl lg:text-base
              '>Schedule a Call</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className='w-11/12 mx-auto flex flex-col-reverse @container lg:flex-row lg:justify-between lg:mt-24'>
            <div className='w-full h-[var(--height-460)] flex flex-col justify-between mt-24 lg:w-2/5 lg:text-left lg:h-[--height-395] lg:pl-24'>
              <span className='text-[#5E6085] font-[var(--font-sora)] text-4xl leading-4 text-center md:text-5xl lg:text-base lg:text-left'>// About //</span>
              <h2 className='text-[var(--primary-color)] font-sora font-bold leading-12 text-5xl text-center md:text-6xl lg:text-5xl lg:text-left'>Best Agency For
                Your Pet.</h2>
              <p className='text-[#656689] font-poppins font-normal leading-7 text-center text-2xl md:text-4xl md:leading-12 lg:text-base lg:text-left lg:leading-7'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className='grid grid-cols-1 gap-4 place-items-center @md:grid-cols-2 @md:gap-10'>
                <div className='flex md:w-full md:pl-16 lg:pl-0'>
                  <input type="checkbox" className='pointer-events-none accent-[var(--color-btn)] mr-2.5 scale-150 md:scale-200 lg:scale-none' defaultChecked />
                  <p className='text-[#48496A] font-poppins font-medium leading-4 text-2xl md:text-2xl lg:text-lg '>Certified Groomer</p>
                </div>

                <div className='flex md:w-full md:pl-16 lg:pl-0'>
                  <input type="checkbox" className='pointer-events-none accent-[var(--color-btn)] mr-2.5 scale-150 md:scale-200 lg:scale-none' defaultChecked />
                  <p className='text-[#48496A] font-poppins font-medium leading-4 text-2xl md:text-2xl lg:text-lg'>Animal Lover</p>
                </div>

                <div className='flex md:w-full md:pl-16 lg:pl-0'>
                  <input type="checkbox" className='pointer-events-none accent-[var(--color-btn)] mr-2.5 scale-150 md:scale-200 lg:scale-none' defaultChecked />
                  <p className='text-[#48496A] font-poppins font-medium leading-4 text-2xl md:text-2xl lg:text-lg'>14+ Years Experience</p>
                </div>

                <div className='flex md:w-full md:pl-16 lg:pl-0'>
                  <input type="checkbox" className='pointer-events-none accent-[var(--color-btn)] mr-2.5 scale-150 md:scale-200 lg:scale-none' defaultChecked />
                  <p className='text-[#48496A] font-poppins font-medium leading-4 text-2xl md:text-2xl lg:text-lg'>Pet Parent Of 3 Dogs</p>
                </div>
              </div>
            </div>

            <div className="mt-5 relative h-[var(--height-412)] md:h-[var(--height-947)] lg:w-1/2 lg:h-[var(--height-700)]">
              <img className="absolute bottom-0 z-10 @md:w-4/5 @md:left-[7%]" src="/images/noTivaHoangThuong-removebg-preview.png" alt="" />
              <div className="absolute rounded-2xl bottom-0 hidden sm:block @md:h-[var(--h-70-percents)] bg-[linear-gradient(180deg,_#FCE0EF_0%,_#FAC3D1_100%)] h-[250px] w-full"></div>
            </div>
          </div>
        </section >

        <section>
          <div className='w-11/12 mx-auto @container flex flex-col-reverse lg:flex-row-reverse'>
            <div className='flex flex-col @md:mt-20 lg:w-1/2'>
              <h2 className='text-[var(--primary-color)] font-sora font-bold text-5xl leading-16 text-center lg:text-left'>Taking A Vacation?<br />So Is Your Pet.</h2>
              <p className='text-[var(--color-p-text)] text-2xl text-center mt-2 md:text-3xl lg:text-base lg:text-left lg:w-[511px]'>We offer long-term and short-term boarding. Every dog has its own private, spacious room and daily individual time in our large play yard.</p>
              <div className='flex flex-col mt-5 lg:flex-row'>
                <div className='flex justify-center items-center'>
                  <svg className='lg:mt-[-2%]' xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 35 35" fill="none">
                    <g filter="url(#filter0_d_11_1141)">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M8.2318 12.5223C7.97335 12.7193 7.92347 13.0884 8.12038 13.3469C8.31729 13.6054 8.68642 13.6553 8.94487 13.4584L9.40679 13.1064L10.1503 23.5114C10.1723 23.8192 10.4285 24.0578 10.7372 24.0578H23.2477C23.5563 24.0578 23.8125 23.8192 23.8345 23.5114L24.5842 13.0204L25.1716 13.461C25.4315 13.656 25.8002 13.6033 25.9952 13.3434C26.1901 13.0834 26.1375 12.7146 25.8775 12.5196L17.3427 6.11768C17.1322 5.95978 16.8425 5.96088 16.6332 6.12036L8.2318 12.5223Z" fill="url(#paint0_linear_11_1141)" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5876 11.0899C17.5876 11.3823 17.3506 11.6193 17.0582 11.6193C16.7659 11.6193 16.5289 11.3823 16.5289 11.0899C16.5289 10.7975 16.7659 10.5605 17.0582 10.5605C17.3506 10.5605 17.5876 10.7975 17.5876 11.0899ZM19.4402 14.2662C19.4402 15.1432 18.3144 15.8542 16.9257 15.8542C15.537 15.8542 14.4113 15.1432 14.4113 14.2662C14.4113 13.3891 15.537 12.6781 16.9257 12.6781C18.3144 12.6781 19.4402 13.3891 19.4402 14.2662ZM19.1756 12.1482C19.4679 12.1482 19.7049 11.9112 19.7049 11.6189C19.7049 11.3265 19.4679 11.0895 19.1756 11.0895C18.8832 11.0895 18.6462 11.3265 18.6462 11.6189C18.6462 11.9112 18.8832 12.1482 19.1756 12.1482ZM15.47 11.6189C15.47 11.9112 15.233 12.1482 14.9406 12.1482C14.6483 12.1482 14.4113 11.9112 14.4113 11.6189C14.4113 11.3265 14.6483 11.0895 14.9406 11.0895C15.233 11.0895 15.47 11.3265 15.47 11.6189ZM17.058 16.6474C15.0115 16.6474 13.3525 18.3064 13.3525 20.3529V24.0584H20.7635V20.3529C20.7635 18.3064 19.1045 16.6474 17.058 16.6474Z" fill="url(#paint1_linear_11_1141)" />
                    </g>
                    <defs>
                      <filter id="filter0_d_11_1141" x="0" y="0" width="34.1128" height="34.0586" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="2" />
                        <feGaussianBlur stdDeviation="4" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.290641 0 0 0 0 0.675565 0 0 0 0 1 0 0 0 0.19 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_11_1141" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_11_1141" result="shape" />
                      </filter>
                      <linearGradient id="paint0_linear_11_1141" x1="17.0564" y1="6" x2="17.0564" y2="24.0578" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#4C9EE2" />
                        <stop offset="1" stop-color="#73BFFF" />
                      </linearGradient>
                      <linearGradient id="paint1_linear_11_1141" x1="17.058" y1="10.5605" x2="17.058" y2="24.0584" gradientUnits="userSpaceOnUse">
                        <stop stop-color="white" />
                        <stop offset="1" stop-color="white" stop-opacity="0.59" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <h3 className='text-[var(--color-pet-vacation)] font-[var(--font-sora)] text-3xl lg:text-lg lg:font-semibold'>Pet Boarding</h3>
                </div>

                <div className='flex justify-center items-center'>
                  <svg className='lg:mt-[3%]' xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 29 29" fill="none">
                    <rect x="11.4656" y="4.41113" width="15.0517" height="12.9756" fill="url(#paint0_linear_11_1100)" />
                    <path d="M10.9465 1.29688H27.0362L28.0743 4.67053H9.90845L10.9465 1.29688Z" fill="url(#paint1_linear_11_1100)" />
                    <rect width="2.0761" height="2.0761" transform="matrix(1 0 0 -1 23.6626 2.07617)" fill="url(#paint2_linear_11_1100)" />
                    <rect x="13.0227" y="6.22656" width="2.59512" height="2.59512" rx="0.5" fill="#FFFAF5" />
                    <rect x="13.0227" y="11.418" width="2.59512" height="2.59512" rx="0.5" fill="#FFFAF5" />
                    <rect x="17.6938" y="6.22656" width="2.59512" height="2.59512" rx="0.5" fill="#FFFAF5" />
                    <rect x="17.6938" y="11.418" width="2.59512" height="2.59512" rx="0.5" fill="#FFFAF5" />
                    <rect x="22.3652" y="6.22656" width="2.59512" height="2.59512" rx="0.5" fill="#FFFAF5" />
                    <rect x="22.3652" y="11.418" width="2.59512" height="2.59512" rx="0.5" fill="#FFFAF5" />
                    <g filter="url(#filter0_d_11_1100)">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4898 13.5909C13.568 11.4546 18.7641 15.1929 11.4898 19.9998C4.21552 15.1934 9.41157 11.4546 11.4898 13.5909Z" fill="url(#paint3_linear_11_1100)" />
                    </g>
                    <g filter="url(#filter1_d_11_1100)">
                      <path d="M7.05371 16.9199H8.53249L9.12401 15.7369L10.1099 18.0536L11.0464 16.3284L11.7858 16.8706L12.5745 14.8496L13.6096 17.4128L14.004 16.8706H15.8771" stroke="white" stroke-width="0.492928" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                      <filter id="filter0_d_11_1100" x="0.743652" y="7.97559" width="21.4922" height="21.0244" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="2" />
                        <feGaussianBlur stdDeviation="3.5" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.368627 0 0 0 0 0.196078 0 0 0 0.35 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_11_1100" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_11_1100" result="shape" />
                      </filter>
                      <filter id="filter1_d_11_1100" x="3.80713" y="12.6035" width="15.3164" height="9.69629" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="1" />
                        <feGaussianBlur stdDeviation="1.5" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.754134 0 0 0 0 0.190122 0 0 0 0 0.0369334 0 0 0 1 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_11_1100" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_11_1100" result="shape" />
                      </filter>
                      <linearGradient id="paint0_linear_11_1100" x1="18.9914" y1="4.41113" x2="18.9914" y2="17.3867" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FFAD97" />
                        <stop offset="1" stop-color="#FF5B2E" />
                      </linearGradient>
                      <linearGradient id="paint1_linear_11_1100" x1="18.9914" y1="1.29687" x2="18.9914" y2="4.67053" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FFAD97" />
                        <stop offset="1" stop-color="#FF5B2E" />
                      </linearGradient>
                      <linearGradient id="paint2_linear_11_1100" x1="1.03805" y1="0" x2="1.03805" y2="2.0761" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FFAD97" />
                        <stop offset="1" stop-color="#FF5B2E" />
                      </linearGradient>
                      <linearGradient id="paint3_linear_11_1100" x1="11.4898" y1="12.9756" x2="11.4898" y2="19.9998" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FF9071" />
                        <stop offset="1" stop-color="#FF5B2E" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <h3 className='text-[var(--color-pet-vacation)] font-[var(--font-sora)] text-3xl ml-2 lg:text-lg lg:font-semibold'>Pet DayCare</h3>
                </div>

                <div className='flex justify-center items-center'>
                  <svg className='ml-2 mr-1 lg:mt-[-7%]' xmlns="http://www.w3.org/2000/svg" width="35" height="40" viewBox="0 0 25 20" fill="none">
                    <path d="M14.7258 0H9.42255C8.7558 0 8.21533 0.540503 8.21533 1.20722V2.77662H9.42255V1.4487C9.42255 1.31534 9.53063 1.20725 9.66399 1.20725H14.4843C14.6177 1.20725 14.7258 1.31534 14.7258 1.4487V2.77665H15.933V1.20722C15.933 0.540503 15.3925 0 14.7258 0Z" fill="url(#paint0_linear_11_1119)" />
                    <path d="M2.67798 11.9925L4.27605 19.0595C4.40046 19.6098 4.8894 20.0005 5.45354 20.0005H18.695C19.2591 20.0005 19.7481 19.6098 19.8725 19.0595L21.4705 11.9925V10.1817L19.8848 3.69777C19.7527 3.15742 19.2684 2.77734 18.7121 2.77734H5.45354C4.8894 2.77734 4.40046 3.16804 4.27605 3.71831L2.67798 10.7853V11.9925Z" fill="url(#paint1_linear_11_1119)" />
                    <path d="M19.8846 3.69777C19.7525 3.15742 19.2682 2.77734 18.7119 2.77734H18.5492C18.6055 2.87469 18.6496 2.98062 18.6774 3.09418L19.8329 7.8191C20.1187 8.98752 20.5185 10.2135 20.2631 11.3889C19.2469 16.0655 15.1041 19.4048 10.3169 19.4013C8.34717 19.3998 6.37746 19.3984 4.40771 19.3969C4.61892 19.7627 5.01322 20.0005 5.45333 20.0005H18.6948C19.2589 20.0005 19.7479 19.6098 19.8723 19.0595L21.4703 11.9925V10.1817L19.8846 3.69777Z" fill="url(#paint2_linear_11_1119)" />
                    <path d="M12.0741 8.39724C11.7407 8.39724 11.4705 8.12697 11.4705 7.79361V5.76769C11.4705 5.43433 11.7407 5.16406 12.0741 5.16406C12.4074 5.16406 12.6777 5.43433 12.6777 5.76769V7.79361C12.6777 8.12697 12.4074 8.39724 12.0741 8.39724Z" fill="#FFF9E2" />
                    <path d="M16.2992 8.39754C16.0391 8.39754 15.799 8.22813 15.721 7.96614L15.1173 5.94022C15.0221 5.62073 15.204 5.28456 15.5235 5.18937C15.843 5.09413 16.1791 5.27601 16.2743 5.5955L16.8779 7.62142C16.9731 7.94091 16.7913 8.27707 16.4718 8.37227C16.4143 8.38938 16.3563 8.39754 16.2992 8.39754Z" fill="#FFF9E2" />
                    <path d="M7.84915 8.39754C7.79208 8.39754 7.73408 8.38938 7.67654 8.37227C7.35705 8.27707 7.17521 7.94091 7.27041 7.62142L7.87404 5.5955C7.96923 5.27601 8.30536 5.09413 8.62489 5.18937C8.94438 5.28456 9.12621 5.62073 9.03102 5.94022L8.42739 7.9661C8.34934 8.22809 8.10923 8.39754 7.84915 8.39754Z" fill="#FFF9E2" />
                    <path d="M12.0741 17.3103C11.7407 17.3103 11.4705 17.0401 11.4705 16.7067V14.6808C11.4705 14.3474 11.7407 14.0771 12.0741 14.0771C12.4074 14.0771 12.6777 14.3474 12.6777 14.6808V16.7067C12.6777 17.0401 12.4074 17.3103 12.0741 17.3103Z" fill="#FFF9E2" />
                    <path d="M15.696 17.3106C15.639 17.3106 15.581 17.3024 15.5235 17.2853C15.204 17.1901 15.0221 16.8539 15.1173 16.5345L15.721 14.5085C15.8162 14.1891 16.1522 14.0073 16.4718 14.1024C16.7913 14.1976 16.9731 14.5338 16.8779 14.8533L16.2743 16.8792C16.1962 17.1412 15.9561 17.3106 15.696 17.3106Z" fill="#FFF9E2" />
                    <path d="M8.45227 17.3116C8.1922 17.3116 7.95208 17.1422 7.87404 16.8802L7.27041 14.8543C7.17521 14.5348 7.35705 14.1987 7.67654 14.1035C7.99607 14.0081 8.33216 14.1901 8.42739 14.5096L9.03102 16.5355C9.12621 16.855 8.94438 17.1912 8.62489 17.2864C8.56735 17.3035 8.5093 17.3116 8.45227 17.3116Z" fill="#FFF9E2" />
                    <g filter="url(#filter0_d_11_1119)">
                      <path d="M21.6716 11.9915H2.47664C2.25437 11.9915 2.07422 11.8114 2.07422 11.5891V10.5831C2.07422 10.3608 2.25437 10.1807 2.47664 10.1807H21.6716C21.8939 10.1807 22.074 10.3608 22.074 10.5831V11.5891C22.074 11.8114 21.8939 11.9915 21.6716 11.9915Z" fill="white" />
                    </g>
                    <g filter="url(#filter1_d_11_1119)">
                      <path d="M13.8257 12.4481H10.3226C10.1003 12.4481 9.92017 12.268 9.92017 12.0457V10.128C9.92017 9.90574 10.1003 9.72559 10.3226 9.72559H13.8257C14.048 9.72559 14.2281 9.90574 14.2281 10.128V12.0457C14.2281 12.268 14.0479 12.4481 13.8257 12.4481Z" fill="#FFE5AC" />
                    </g>
                    <path d="M13.8257 9.72559H13.0209C13.0209 10.8958 12.0722 11.8445 10.902 11.8445H9.92017V12.0457C9.92017 12.2679 10.1003 12.4481 10.3226 12.4481H13.8257C14.048 12.4481 14.2281 12.2679 14.2281 12.0457V10.128C14.2281 9.90578 14.048 9.72559 13.8257 9.72559Z" fill="#FFF6E1" />
                    <defs>
                      <filter id="filter0_d_11_1119" x="0.0742188" y="9.18066" width="23.9998" height="5.81055" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="1" />
                        <feGaussianBlur stdDeviation="1" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.846777 0 0 0 0 0.584621 0 0 0 0 0.00971645 0 0 0 0.17 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_11_1119" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_11_1119" result="shape" />
                      </filter>
                      <filter id="filter1_d_11_1119" x="4.92017" y="5.72559" width="14.3079" height="12.7227" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="1" />
                        <feGaussianBlur stdDeviation="2.5" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.737533 0 0 0 0 0.534613 0 0 0 0 0.0852892 0 0 0 1 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_11_1119" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_11_1119" result="shape" />
                      </filter>
                      <linearGradient id="paint0_linear_11_1119" x1="12.0742" y1="0" x2="12.0742" y2="2.77665" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FFD986" />
                        <stop offset="1" stop-color="#FABF3E" />
                      </linearGradient>
                      <linearGradient id="paint1_linear_11_1119" x1="12.0743" y1="2.77734" x2="12.0743" y2="20.0005" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FFD986" />
                        <stop offset="1" stop-color="#FABF3E" />
                      </linearGradient>
                      <linearGradient id="paint2_linear_11_1119" x1="20.5" y1="4.5" x2="12.939" y2="20.0005" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FFD984" />
                        <stop offset="1" stop-color="#F5B42A" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <h3 className='text-[var(--color-pet-vacation)] font-[var(--font-sora)] text-3xl ml-2 lg:text-lg lg:font-semibold'>Pet Transport</h3>
                </div>
              </div>
              <div className="hidden lg:block w-96 justify-start text-slate-500 text-sm font-normal font-['Poppins'] leading-normal">While you're on holiday, here's where your furry friends will spend their time.</div>
              <div className='text-center mt-2.5 lg:text-left'><a className=' text-2xl underline text-[var(--color-btn)] lg:text-base' href="#viewMore">View more</a></div>
            </div>


            <div className='lg:w-2/5 lg:relative'>
              <img src="/images/best-argency.png" className='w-full lg:z-10 lg:absolute lg:bottom-0 lg:right-[12%] lg:h-[89%] lg:w-[78%]' alt="couple-of-dogs" />
              <div className='hidden lg:block h-full w-[var(--w-70-percents)] bg-gradient-to-b from-[#C6E2FA] to-[#94C2EA] absolute bottom-0 right-1/5 rounded-2xl '>

                <svg className='absolute top-[1%] right-[13%]' width="9" height="33" viewBox="0 0 9 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 1.5C5.83333 2.66667 5.8 5.4 7 7C8.5 9 8 10 5.5 11.5C3 13 3.5 15 5 17.5C6.5 20 5.5 20.5 3.5 22C1.5 23.5 1 24 3 26.5C4.6 28.5 3.33333 30.6667 2.5 31.5" stroke="#F8F8F8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>


                <svg className="absolute top-[-3%] right-0" width="21" height="36" viewBox="0 0 21 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 0C18.8333 0.166667 16.6 1.5 17 5.5C17.5 10.5 15 11.5 13 12C11 12.5 9.5 13 10 18.5C10.5 24 7 24.5 4.5 25C2 25.5 1 26.5 1.5 35" stroke="#AE8459" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                <svg className='absolute right-[-9%] top-[6%]' width="56" height="30" viewBox="0 0 56 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M55 1C54.5 1.83333 52.7 3.2 49.5 2C45.5 0.5 42.5 0.5 40.5 5C38.5 9.5 38 13 32 11C26 9 24.5 11 23.5 15C22.5 19 20.5 21.5 16 19.5C11.5 17.5 7 17.5 6 22C5 26.5 5 28.5 1.5 28" stroke="#E08345" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                <svg className='absolute bottom-[67%] right-[-13%]' width="23" height="26" viewBox="0 0 23 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 3.5L23 0L14 25.5L0 3.5Z" fill="#3F97E4" />
                </svg>

                <svg className='absolute bottom-[30%] right-[3%]' width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.5 15L13 1L1 3.5L9.5 15Z" stroke="white" stroke-linejoin="round" />
                </svg>

                <div className='w-full h-full relative'>
                  <div className='absolute bottom-[11%] right-[16%]'>
                    <div className="w-32 h-28 relative">
                      <div className="w-28 h-28 left-[123px] top-[119.58px] absolute rounded-full  outline-2 outline-offset-[-1px] outline-blue-400"></div>
                      <div className="w-28 h-28 left-[113.60px] top-[111.90px] absolute rounded-full  outline-2 outline-offset-[-1px] outline-blue-400"></div>
                      <div className="w-28 h-28 left-[104.21px] top-[104.21px] absolute rounded-full outline-2 outline-offset-[-1px] outline-blue-400"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='bg-custom-bg2 px-2.5 py-10'>
          <div className='mx-auto w-11/12 @container'>
            <div className='text-center'>
              <h3 className='text-[var(--color-h3-title)] font-[var(--font-sora)] text-2xl leading-4 @xl:text-3xl'>What we do for you?</h3>
              <h2 className='text-[var(--primary-color)] font-sora text-5xl leading-16 font-bold mt-4'>Our Services</h2>
            </div>
            <div className='grid grid-cols-1 gap-3 mt-5 lg:grid-cols-3'>
              <div className='grid grid-cols-1 gap-8'>
                <div className='bg-white w-full h-52 rounded-xl p-8 flex flex-col justify-between'>
                  <div className='border-l-4 border-l-[var(--color-btn)] pl-3'>
                    <h4 className='text-[var(--primary-color)] font-sora text-xl font-semibold leading-5 @xl:text-3xl @5xl:text-xl'>Puppy Sitting</h4>
                  </div>

                  <p className='text-[var(--color-p-text)] font-poppins text-lg font-normal leading-6 @xl:text-2xl @5xl:text-sm'>Helping your new pup to be a good boy or girl isn’t always easy, but we’re here to help.</p>

                  <div className='flex'>
                    <a href="#readmore" className='mr-2 text-[var(--primary-color)]  @xl:text-2xl @5xl:text-xs'>Read More</a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M3 9L9 3" stroke="#FF5B2E" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M4.125 3H9V7.875" stroke="#FF5B2E" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                </div>

                <div className='bg-white w-full h-52 rounded-xl p-8 flex flex-col justify-between'>
                  <div className='border-l-4 border-l-[var(--color-btn)] pl-3'>
                    <h4 className='text-[var(--primary-color)] font-sora text-xl font-semibold leading-5 @xl:text-2xl  @5xl:text-xl'>Dog Walking</h4>
                  </div>

                  <p className='text-[var(--color-p-text)] font-poppins text-lg font-normal leading-6  @xl:text-2xl  @5xl:text-sm'>Choose from a 30, 45, or 60-minute visit to give your pet their daily dose of fun-filled.</p>

                  <div className='flex'>
                    <a href="#readmore" className='mr-2 text-[var(--primary-color)] @xl:text-2xl  @5xl:text-xs'>Read More</a>

                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M3 9L9 3" stroke="#FF5B2E" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M4.125 3H9V7.875" stroke="#FF5B2E" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                </div>

                <div className='bg-white w-full h-52 rounded-xl p-8 flex flex-col justify-between'>
                  <div className='border-l-4 border-l-[var(--color-btn)] pl-3'>
                    <h4 className='text-[var(--primary-color)] font-sora text-xl font-semibold leading-5 @xl:text-2xl  @5xl:text-xl'>Pet Sitting</h4>
                  </div>

                  <p className='text-[var(--color-p-text)] font-poppins text-lg font-normal leading-6 @xl:text-2xl  @5xl:text-sm'>While you’re away we can make sure your pet has all the food, water, exercise, and, of course.</p>

                  <div className='flex'>
                    <a href="#readmore" className='mr-2 text-[var(--primary-color)]  @xl:text-2xl  @5xl:text-xs'>Read More</a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M3 9L9 3" stroke="#FF5B2E" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M4.125 3H9V7.875" stroke="#FF5B2E" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className='h-516 relative lg:w-[450px]'>
                <img className='absolute z-10 rounded-b-2xl @xl:left-3/12 @5xl:left-[10%]' src="/images/choLongXu.png" alt="" />
                <div className='absolute h-80 rounded-2xl bottom-0 w-full @xl:w-3/5  @xl:left-3/12 bg-[#97ecf6]  @5xl:left-[10%]  @5xl:w-[80%]'></div>
              </div>

              <div className='hidden sm:block md:mt-8'>
                <div className='grid grid-cols-1 gap-8'>
                  <div className='bg-white w-full h-52 rounded-xl p-8 flex flex-col justify-between'>
                    <div className='border-l-4 border-l-[var(--color-btn)] pl-3'>
                      <h4 className='text-[var(--primary-color)] font-sora text-xl font-semibold leading-5 @xl:text-2xl  @5xl:text-xl'>Overnight Care</h4>
                    </div>

                    <p className='text-[var(--color-p-text)] font-poppins text-lg font-normal leading-6 @xl:text-2xl  @5xl:text-sm'>If you’re away for the night, we can stay the night or stop by in the evening and morning.</p>

                    <div className='flex'>
                      <a href="#readmore" className='mr-2 text-[var(--primary-color)] @xl:text-2xl @5xl:text-xs'>Read More</a>

                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M3 9L9 3" stroke="#FF5B2E" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M4.125 3H9V7.875" stroke="#FF5B2E" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </div>
                  </div>

                  <div className='bg-white w-full h-52 rounded-xl p-8 flex flex-col justify-between'>
                    <div className='border-l-4 border-l-[var(--color-btn)] pl-3'>
                      <h4 className='text-[var(--primary-color)] font-sora text-xl font-semibold leading-5 @xl:text-2xl  @5xl:text-xl'>Pet Taxi</h4>
                    </div>

                    <p className='text-[var(--color-p-text)] font-poppins text-lg font-normal leading-6 @xl:text-2xl  @5xl:text-sm'>Does your pet need a lift to the groomers, vet, or dog park? We’ve got their tail covered.</p>

                    <div className='flex'>
                      <a href="#readmore" className='mr-2 text-[var(--primary-color)] @xl:text-2xl  @5xl:text-xs'>Read More</a>

                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M3 9L9 3" stroke="#FF5B2E" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M4.125 3H9V7.875" stroke="#FF5B2E" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </div>
                  </div>

                  <div className='bg-white w-full h-52 rounded-xl p-8 flex flex-col justify-between'>
                    <div className='border-l-4 border-l-[var(--color-btn)] pl-3'>
                      <h4 className='text-[var(--primary-color)] font-sora text-xl font-semibold leading-5 @xl:text-2xl  @5xl:text-xl'>Pet Medical Admin</h4>
                    </div>

                    <p className='text-[var(--color-p-text)] font-poppins text-lg font-normal leading-6 @xl:text-2xl  @5xl:text-sm'>Our team of experienced professionals can help with everything from pills to injections.</p>

                    <div className='flex'>
                      <a href="#readmore" className='mr-2 text-[var(--primary-color)] @xl:text-2xl  @5xl:text-xs'>Read More</a>

                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M3 9L9 3" stroke="#FF5B2E" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M4.125 3H9V7.875" stroke="#FF5B2E" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex justify-center mt-10'>
              <div className='group hover:bg-[var(--color-btn)] hover:cursor-pointer border-2 border-[var(--color-btn)] flex justify-center rounded-4xl h-12 w-4/5 @xl:w-1/2 @xl:h-16  @5xl:w-[15%]'>
                <button className='text-[var(--color-btn)] text-lg font-poppins font-semibold group-hover:text-white group-hover:cursor-pointer'>View All Services</button>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className='w-11/12 mx-auto @container'>
            <div className='text-center'>
              <p className='text-[var(--color-p)] text-xl font-sora font-semibold'>Pet Care Staff</p>
              <h2 className='text-[var(--primary-color)] text-5xl font-sora font-bold leading-12 mt-3'>Meet Our Groomers</h2>
            </div>
            <div className='grid grid-cols-1 gap-20 mt-12 lg:grid-cols-4'>

              <div className='p-4 relative h-[var(--height-430)] md:flex md:justify-center'>
                <img className="w-11/12 h-11/12 rounded-full absolute top-0 z-10 md:w-1/2 lg:w-full" src="/images/groomer-1.png" alt="" />
                <div className='w-11/12 h-4/5 rounded-full bg-[#81c2f9] absolute top-10 md:w-1/2 md:h-[90%] md:top-0 lg:w-full'></div>
                <div className='hidden md:block lg:w-[117%] lg:left-[-8%] absolute left-[19%] bottom-5 z-20 w-[62%] h-full border-b-8 border-[#81c2f9] rounded-b-full'></div>
                <div className='hidden md:block lg:w-[95%] lg:left-[3%] absolute left-[27%] bottom-[4%] z-40 w-[46%] h-full border-b-12 border-[#ffffff] rounded-b-full'></div>
                <div className='absolute left-0 bottom-5 z-20 w-full h-full border-b-8 border-[#81c2f9] rounded-b-full md:hidden'></div>
                <div className='absolute right-0 bottom-5 z-20 w-full h-full border-b-8 border-[#81c2f9] rounded-b-full md:hidden'></div>
                <div className='absolute left-[1.25rem] bottom-[1.0625rem] z-40 w-[90%] h-full border-b-12 border-[#ffffff] rounded-b-full md:hidden'></div>
                <div className='text-center absolute bottom-[-50px] w-full left-0'>
                  <p className='text-slate-500 text-2xl font-normal font-poppins leading-none'>Pet Trainer</p>
                  <h3 className='text-blue-950 text-3xl font-semibold font-sora leading-snug'>Meghan Samit</h3>
                </div>
              </div>

              <div className='p-4 relative h-[var(--height-430)] md:flex md:justify-center'>
                <img className="w-11/12 h-11/12 rounded-full absolute top-0  z-10 md:w-1/2 lg:w-full" src="/images/groomer-2.png" alt="" />
                <div className='w-11/12 h-4/5 rounded-full bg-[#fc8f67] absolute top-10 md:w-1/2 md:h-[90%] md:top-0 lg:w-full'></div>
                <div className='hidden md:block lg:border-t-8 lg:rounded-t-full absolute left-[19%] bottom-5 z-20 w-[62%] h-full border-b-8 border-[#fc8f67] rounded-b-full
                lg:border-b-0 border-t-12 lg:w-full lg:left-0'></div>
                <div className='hidden md:block absolute left-[27%] bottom-[4%] z-40 w-[46%] h-full border-b-12 border-[#ffffff] rounded-b-full lg:border-b-0
                lg:border-t-12 lg:rounded-t-full lg:w-[90%] lg:left-[5%] lg:top-[-5%]
                '></div>
                <div className='absolute left-0 top-0 z-20 w-full h-full border-t-8 border-[#fc8f67] rounded-t-full md:hidden'></div>
                <div className='absolute right-0 top-0 z-20 w-full h-full border-t-8 border-[#fc8f67] rounded-t-full md:hidden'></div>
                <div className='absolute top-[-3px] z-40 w-[92%] left[5%] h-full border-t-12 border-[#ffffff] rounded-t-full md:hidden'>
                </div>
                <div className='text-center absolute bottom-[-50px] w-full left-0'>
                  <p className='text-slate-500 text-2xl font-normal font-poppins leading-none lg:text-md  '>Veterinarian</p>
                  <h3 className='text-blue-950 text-3xl font-semibold font-sora leading-snug'>Alissa Silva</h3>
                </div>
              </div>

              <div className='p-4 relative h-[var(--height-430)] md:flex md:justify-center'>
                <img className="w-11/12 h-11/12 rounded-full absolute top-0 z-10 md:w-1/2 lg:w-full" src="/images/groomer-3.png" alt="" />
                <div className='w-11/12 h-4/5 rounded-full bg-[#fcb841] absolute top-10 md:w-1/2 md:h-[90%] md:top-0 lg:w-full'></div>
                <div className='hidden md:block lg:w-[117%] lg:left-[-8%] absolute left-[19%] bottom-5 z-20 w-[62%] h-full border-b-8 border-[#fcb841] rounded-b-full'></div>
                <div className='hidden md:block lg:w-[95%] lg:left-[3%] absolute left-[27%] bottom-[4%] z-40 w-[46%] h-full border-b-12 border-[#ffffff] rounded-b-full'></div>
                <div className='absolute left-0 bottom-5 z-20 w-full h-full border-b-8 border-[#fcb841] rounded-b-full md:hidden'></div>
                <div className='absolute right-0 bottom-5 z-20 w-full h-full border-b-8 border-[#fcb841] rounded-b-full md:hidden'></div>
                <div className='absolute left-[1.25rem] bottom-[1.0625rem] z-40 w-[90%] h-full border-b-12 border-[#ffffff] rounded-b-full md:hidden'></div>
                <div className='text-center absolute bottom-[-50px] w-full left-0'>
                  <p className='text-slate-500 text-2xl font-normal font-poppins leading-none'>Veterinarian</p>
                  <h3 className='text-blue-950 text-3xl font-semibold font-sora leading-snug'>Cindy Harris</h3>
                </div>
              </div>

              <div className='p-4 relative h-[var(--height-430)] md:flex md:justify-center'>
                <img className="w-11/12 h-11/12 rounded-full absolute top-0 z-10 md:w-1/2 lg:w-full" src="/images/groomer-4.png" alt="" />
                <div className='w-11/12 h-4/5 rounded-full bg-[#3ac5da] absolute top-10 md:w-1/2 md:h-[90%] md:top-0 lg:w-full'></div>
                <div className='hidden md:block lg:border-t-8 lg:rounded-t-full absolute left-[19%] bottom-5 z-20 w-[62%] h-full border-b-8 border-[#3ac5da] rounded-b-full
                lg:border-b-0 border-t-12 lg:w-full lg:left-0'></div>
                <div className='hidden md:block absolute left-[27%] bottom-[4%] z-40 w-[46%] h-full border-b-12 border-[#ffffff] rounded-b-full lg:border-b-0
                lg:border-t-12 lg:rounded-t-full lg:w-[90%] lg:left-[5%] lg:top-[-5%]
                '></div>
                <div className='absolute left-0 top-0 z-20 w-full h-full border-t-8 border-[#3ac5da] rounded-t-full md:hidden'></div>
                <div className='absolute right-0 top-0 z-20 w-full h-full border-t-8 border-[#3ac5da] rounded-t-full md:hidden'></div>
                <div className='absolute top-[-3px] z-40 w-[92%] left[5%] h-full border-t-12 border-[#ffffff] rounded-t-full md:hidden'>
                </div>
                <div className='text-center absolute bottom-[-50px] w-full left-0'>
                  <p className='text-slate-500 text-2xl font-normal font-poppins leading-none'>Animal Caretaker</p>
                  <h3 className='text-blue-950 text-3xl font-semibold font-sora leading-snug'>Lucas Tony</h3>
                </div>
              </div>

            </div>
            <div className='flex justify-center mt-28'>
              <div className='border-1 border-[var(--color-btn)] flex justify-center rounded-4xl h-12 w-4/5 lg:w-3/12 group hover:cursor-pointer hover:bg-[var(--color-btn)]'>
                <button className='text-[var(--color-btn)] text-lg font-poppins font-semibold group-hover:text-white group-hover:cursor-pointer'>View All Team</button>
              </div>
            </div>
          </div>
        </section>

        <section className='bg-[var(--color-bg-2)]'>
          <div className='w-11/12 mx-auto @container py-16'>
            <div className='text-center py-5'>
              <div>
                <h2 className='text-blue-950 text-5xl font-bold font-sora leading-12 '>The Best Choice</h2>
              </div>
              <div className='my-5 lg:flex lg:justify-center'>
                <p className='text-slate-500 text-base font-normal font-poppins leading-loose md:text-2xl md:leading-9 lg:w-1/2 lg:text-base'>We offer long-term and short-term boarding. Every dog has its own private, spacious room and daily individual time in our large play yard.</p>
              </div>
              <div className='md:flex md:justify-center lg:relative'>
                <div className='flex justify-center relative h-20 md:w-[var(--w-70-percents)] lg:w-2/5'>
                  <div className="absolute left-0 w-3/5 h-14 text-[var(--color-btn)] font-semibold rounded-[31px] border border-orange-500 justify-center flex items-center">Monthly</div>
                  <div className="w-2/5 h-14 rounded-[31px]  bg-[var(--color-btn)] absolute right-0 justify-center flex items-center text-white">Yearly</div>
                </div>

                <div className='absolute right-[21%] top-0 hidden lg:block'>
                  <div className="relative w-[81px] h-[40px]">
                    {/* Oval viền */}
                    <svg
                      className="absolute top-0 left-0"
                      width="81"
                      height="28"
                      viewBox="0 0 81 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.4999 3.72262C31.4999 1.55596 55.1999 -1.27738 69.9999 4.72262C88.4999 12.2226 81.4999 26.7227 38.4999 27.2227C-4.50014 27.7227 -13.5001 13.2226 25.9999 3.72262C57.5999 -3.87733 73.1666 6.22268 77 12.2227"
                        stroke="#5860A6"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    {/* Text SAVE 15% */}
                    <svg className='absolute top-[8px] left-[16px]' width="51" height="15" viewBox="0 0 51 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.2433 13.3995C3.86194 13.4329 3.51313 13.4124 3.19685 13.3381C2.88092 13.2678 2.60388 13.1489 2.36573 12.9815C2.12369 12.8145 1.93112 12.6078 1.78802 12.3615C1.6488 12.1149 1.56558 11.8359 1.53834 11.5246C1.51553 11.2639 1.53494 11.0152 1.59658 10.7784C1.66176 10.5375 1.76274 10.3247 1.89953 10.1402C2.03631 9.95572 2.2018 9.80792 2.39598 9.69682C2.58982 9.58184 2.79959 9.51447 3.02529 9.49472C3.30547 9.47021 3.54702 9.51966 3.74996 9.64307C3.95289 9.76647 4.08843 9.94871 4.15658 10.1898C3.7402 10.2262 3.41913 10.3661 3.19338 10.6093C3.08583 10.7246 3.00562 10.861 2.95275 11.0186C2.90376 11.1758 2.88727 11.3458 2.90327 11.5287C2.93391 11.8789 3.05943 12.1483 3.27983 12.3369C3.50377 12.5212 3.78891 12.5982 4.13525 12.5679C4.34149 12.5498 4.53088 12.496 4.70341 12.4064C4.87561 12.3129 5.02207 12.1942 5.1428 12.0504C5.26354 11.9065 5.35092 11.74 5.40497 11.551C5.46256 11.3577 5.48217 11.1561 5.46378 10.9459C5.42974 10.5568 5.26202 10.1637 4.96064 9.76653C4.84127 9.61229 4.71057 9.46295 4.56854 9.31853C4.43006 9.16988 4.23656 8.97507 3.98805 8.73409C3.76527 8.51831 3.57829 8.33077 3.42711 8.17146C3.27593 8.01216 3.13803 7.84777 3.01342 7.6783C2.71101 7.26951 2.54159 6.85692 2.50517 6.44054C2.47793 6.12923 2.51889 5.83548 2.62805 5.55929C2.73686 5.27921 2.90517 5.02921 3.13296 4.80931C3.36076 4.5894 3.63332 4.41066 3.95067 4.27311C4.26801 4.13555 4.61542 4.05026 4.99288 4.01724C5.63496 3.96106 6.16385 4.06772 6.57954 4.3372C6.77926 4.46873 6.93679 4.63336 7.05212 4.83109C7.17134 5.02848 7.24201 5.25365 7.26414 5.50659C7.29308 5.83736 7.23308 6.11513 7.08413 6.3399C7.01516 6.44789 6.92468 6.53423 6.81271 6.59892C6.70462 6.66327 6.58637 6.70107 6.45796 6.7123C6.15832 6.73852 5.90421 6.63527 5.69564 6.40256C5.83787 6.28033 5.94396 6.12596 6.01391 5.93947C6.08741 5.74874 6.11514 5.55026 6.09709 5.34401C6.07462 5.08718 5.98104 4.89147 5.81634 4.75687C5.6513 4.61839 5.43647 4.56072 5.17185 4.58387C5.01231 4.59783 4.86699 4.63995 4.7359 4.71024C4.6087 4.78019 4.50317 4.87372 4.4193 4.99085C4.33155 5.10832 4.26691 5.24338 4.22536 5.39602C4.18771 5.54832 4.17655 5.71202 4.19187 5.88713C4.21366 6.13618 4.29297 6.37039 4.42979 6.58977C4.56662 6.80915 4.75489 7.03383 4.9946 7.26382C5.20925 7.47638 5.4393 7.68565 5.68475 7.8916C6.25775 8.39043 6.67585 8.88909 6.93905 9.38758C7.09436 9.68377 7.18819 10.0167 7.22053 10.3864C7.25457 10.7755 7.20646 11.1444 7.07619 11.493C6.94559 11.8377 6.74313 12.1456 6.46884 12.4167C6.19488 12.6916 5.86734 12.9143 5.48623 13.0849C5.10512 13.2555 4.6908 13.3604 4.2433 13.3995ZM10.8401 13.9752C10.6221 13.9943 10.4306 14.0012 10.2655 13.9961C10.1003 13.9909 9.94253 13.9577 9.79208 13.8963C9.39862 13.7464 9.17788 13.3972 9.12988 12.8485C9.10673 12.5839 9.11984 12.2631 9.16922 11.8863C9.22249 11.5091 9.30822 11.0997 9.42643 10.6581C9.68648 9.68637 10.0315 8.74452 10.4614 7.83248C10.0666 7.89056 9.75664 7.97845 9.53167 8.09616C9.31025 8.20964 9.17125 8.36884 9.11468 8.57377C9.1497 8.57071 9.1883 8.60851 9.23047 8.68716C9.27264 8.76582 9.29747 8.84795 9.30496 8.93356C9.31722 9.07365 9.26288 9.19212 9.14196 9.28896C9.02103 9.38581 8.86523 9.44257 8.67455 9.45925C8.46053 9.47798 8.28031 9.43493 8.1339 9.3301C7.97936 9.22207 7.89222 9.0552 7.87247 8.8295C7.85511 8.63104 7.89892 8.43703 8.00389 8.24747C8.10852 8.05402 8.26595 7.88144 8.47619 7.72973C8.68997 7.57378 8.9415 7.4459 9.23078 7.34609C9.5236 7.24205 9.84124 7.17505 10.1837 7.14509C10.351 7.13045 10.5602 7.12391 10.8113 7.12547C11.3884 6.01235 11.9853 5.12687 12.6022 4.46904C13.3196 3.70439 14.0051 3.29347 14.6589 3.23627C15.048 3.20223 15.3681 3.23107 15.6193 3.32282L14.5152 12.2832L12.7932 12.4339L13.3302 8.01675C13.0307 7.90963 12.7515 7.83406 12.4928 7.79004C12.238 7.74567 11.9714 7.7239 11.6931 7.72473C11.3271 8.74096 11.0448 9.77144 10.846 10.8162C10.6398 11.8655 10.5639 12.7015 10.6184 13.3241C10.6453 13.6315 10.7192 13.8485 10.8401 13.9752ZM13.8048 4.16385C13.4748 4.38093 13.1418 4.76493 12.8057 5.31585C12.4771 5.8622 12.1749 6.48662 11.8991 7.18911C12.4531 7.24651 12.9516 7.3421 13.3947 7.47587L13.8048 4.16385ZM18.3537 3.71882C17.8042 3.98255 17.3936 4.35374 17.1218 4.83237C16.8535 5.30678 16.7482 5.8728 16.8057 6.53045C16.8275 6.7795 16.8721 6.97557 16.9395 7.11868C16.9595 7.16791 16.9829 7.21095 17.0096 7.24783C17.0276 7.2737 17.0377 7.30026 17.0401 7.3275C16.6082 7.36529 16.2855 7.30726 16.072 7.1534C15.8339 6.98602 15.6966 6.69414 15.6602 6.27776C15.6374 6.01704 15.6713 5.75527 15.762 5.49246C15.8524 5.22575 15.9904 4.96469 16.1758 4.70927C16.3507 4.46655 16.5638 4.23616 16.8153 4.0181C17.0703 3.79581 17.3491 3.59888 17.6517 3.42732C18.2871 3.06981 18.9316 2.86245 19.5854 2.80526C19.7644 2.7896 19.9246 2.78342 20.066 2.78673L20.8146 10.1323L22.69 2.59246L23.5247 2.51943L20.9827 11.7174L19.2607 11.868L18.3537 3.71882ZM25.7588 11.5172C25.3852 11.5498 25.0534 11.522 24.7633 11.4337C24.4736 11.3492 24.2285 11.2138 24.0279 11.0275C23.8361 10.8521 23.6844 10.6419 23.5727 10.3968C23.465 10.1513 23.3987 9.88657 23.3738 9.6025C23.3463 9.2873 23.3688 8.96183 23.4413 8.6261C23.5136 8.28648 23.6326 7.9663 23.7984 7.66554C23.9671 7.35278 24.1785 7.07941 24.4325 6.84544C24.6904 6.61114 24.9847 6.43442 25.3154 6.3153C25.0507 6.15809 24.8472 5.96023 24.7047 5.72174C24.5662 5.4829 24.4847 5.22339 24.4602 4.94321C24.4333 4.63579 24.4708 4.3247 24.5726 4.00994C24.678 3.69095 24.8367 3.39866 25.0488 3.13307C25.2676 2.85513 25.5302 2.63021 25.8367 2.45832C26.1468 2.28218 26.4866 2.17795 26.8563 2.14561C27.0937 2.12484 27.3203 2.13834 27.5363 2.18611C27.7518 2.22999 27.941 2.30755 28.1036 2.41879C28.2744 2.53325 28.4108 2.68013 28.5127 2.85942C28.6147 3.03872 28.6762 3.249 28.6973 3.49027C28.7126 3.66538 28.7036 3.83086 28.6702 3.98671C28.6367 4.14256 28.5841 4.28049 28.5123 4.40049C28.4404 4.52048 28.3527 4.61638 28.2492 4.68818C28.1457 4.75997 28.0356 4.80098 27.9189 4.81119C27.7009 4.83025 27.5048 4.73958 27.3304 4.53918C27.3945 4.51004 27.4566 4.45755 27.5166 4.38172C27.5763 4.302 27.627 4.20934 27.6687 4.10373C27.7069 4.00236 27.7347 3.89406 27.7521 3.77883C27.7694 3.66359 27.7735 3.55344 27.7643 3.44838C27.7446 3.22268 27.6613 3.05547 27.5146 2.94675C27.3932 2.85934 27.2372 2.82397 27.0465 2.84066C26.8753 2.85564 26.7179 2.91646 26.5743 3.02313C26.4307 3.1298 26.3116 3.26962 26.2169 3.4426C26.1219 3.61168 26.0521 3.80011 26.0076 4.00791C25.9669 4.21537 25.9558 4.42417 25.9742 4.6343C26.0072 5.01177 26.129 5.32853 26.3396 5.58458C26.5685 5.87041 26.8961 6.05153 27.3224 6.12795C26.9255 6.25286 26.57 6.49179 26.2558 6.84473C25.9742 7.16737 25.7583 7.54506 25.6079 7.97778C25.4615 8.41015 25.404 8.80729 25.4357 9.16919C25.4674 9.53109 25.58 9.80945 25.7734 10.0043C25.9884 10.2207 26.2886 10.3121 26.6738 10.2784C26.8645 10.2617 27.0627 10.2189 27.2684 10.1499C27.4777 10.0767 27.6751 9.98101 27.8609 9.86281C28.2922 9.59373 28.5983 9.26109 28.7793 8.8649L29.0644 8.96348C28.8095 9.67983 28.3769 10.2706 27.7667 10.7357C27.4724 10.9575 27.1545 11.1343 26.8132 11.2661C26.4721 11.4018 26.1207 11.4855 25.7588 11.5172ZM32.7104 3.17446L31.5781 3.27353L31.6701 2.71259C32.1099 2.67411 32.5142 2.58972 32.8832 2.45942C33.4649 2.25167 34.0471 1.93606 34.6296 1.51259L33.509 10.6215L31.7871 10.7721L32.7104 3.17446ZM37.6351 10.3193C36.9269 10.3813 36.3729 10.2788 35.9731 10.0118C35.5772 9.74453 35.3547 9.3307 35.3057 8.77034C35.2842 8.52518 35.3015 8.29625 35.3574 8.08354C35.4133 7.87082 35.5046 7.68246 35.6314 7.51844C35.8886 7.18617 36.2468 6.99994 36.706 6.95977C37.1924 6.91721 37.4942 7.09471 37.6113 7.49227C37.2839 7.56012 37.0316 7.70179 36.8544 7.91727C36.6808 8.12852 36.6074 8.38786 36.6343 8.69528C36.6588 8.97546 36.7598 9.18817 36.9371 9.33342C37.1145 9.47866 37.3453 9.53886 37.6294 9.51401C37.8589 9.49392 38.0664 9.42283 38.2518 9.30074C38.4407 9.17442 38.5964 9.00396 38.7188 8.78935C38.8415 8.57863 38.9281 8.33579 38.9785 8.06081C39.0329 7.7855 39.0461 7.48829 39.0182 7.1692C38.9695 6.61273 38.8174 6.19667 38.5619 5.92101C38.31 5.64112 37.9739 5.51956 37.5537 5.55633C37.3319 5.57573 37.0984 5.64125 36.8533 5.75288C36.6078 5.86062 36.3357 6.02167 36.0368 6.23604L35.8632 6.13359L36.3955 1.52866C37.2452 1.56019 37.9172 1.55434 38.4114 1.5111C38.7694 1.47978 39.1135 1.42418 39.4438 1.34432C39.7775 1.26022 40.1182 1.14219 40.4656 0.990237C40.4917 1.10951 40.5111 1.24113 40.5237 1.38512C40.5594 1.79371 40.4867 2.12749 40.3054 2.38646C40.0997 2.67895 39.7555 2.8463 39.273 2.88851C39.0123 2.91132 38.6564 2.89933 38.2053 2.85253C38.0514 2.84246 37.8754 2.82453 37.6771 2.79875L37.2507 2.76547L36.9615 4.97291C37.4417 4.67994 37.925 4.51218 38.4114 4.46962C38.7305 4.4417 39.0254 4.47276 39.296 4.5628C39.5666 4.65284 39.8046 4.79671 40.0101 4.99439C40.2156 5.19208 40.3805 5.44037 40.5047 5.73928C40.6288 6.03819 40.7073 6.37443 40.74 6.748C40.7822 7.23053 40.7391 7.67936 40.6107 8.09447C40.4862 8.50924 40.2871 8.8776 40.0134 9.19956C39.7432 9.51729 39.4047 9.77237 38.9981 9.96479C38.5914 10.1572 38.1371 10.2754 37.6351 10.3193ZM42.7089 5.72289C41.7983 5.80255 41.2911 5.24895 41.1873 4.06208C41.1478 3.61068 41.1708 3.17929 41.2564 2.76793C41.3458 2.35622 41.4903 1.99067 41.6898 1.67129C41.8854 1.35225 42.1237 1.09613 42.4048 0.902922C42.6859 0.709718 42.9938 0.598476 43.3285 0.569197C44.2546 0.48817 44.7698 1.04304 44.874 2.2338C44.9128 2.67742 44.8853 3.10331 44.7917 3.51146C44.7019 3.91928 44.5574 4.28482 44.3582 4.6081C44.1591 4.93137 43.9172 5.19173 43.6325 5.38916C43.3475 5.58271 43.0397 5.69395 42.7089 5.72289ZM47.0818 0.376105L47.9398 0.301036L43.7531 9.72523L42.895 9.8003L47.0818 0.376105ZM42.8353 5.21776C42.987 5.20449 43.1276 5.10788 43.2569 4.92796C43.3898 4.7438 43.4998 4.49891 43.5867 4.19329C43.6737 3.88767 43.7315 3.53952 43.76 3.14882C43.7882 2.75424 43.7841 2.34876 43.7477 1.93238C43.7201 1.61718 43.673 1.39191 43.6062 1.25659C43.536 1.1255 43.4347 1.06574 43.3024 1.07731C43.1506 1.09059 43.0065 1.19143 42.87 1.37982C42.7375 1.56787 42.6238 1.81504 42.5291 2.12134C42.4343 2.42764 42.3661 2.76886 42.3245 3.14501C42.2868 3.52082 42.2842 3.89357 42.3165 4.26325C42.3465 4.60569 42.4034 4.85362 42.4875 5.00704C42.5676 5.1608 42.6835 5.23104 42.8353 5.21776ZM47.5241 9.46589C46.6136 9.54556 46.1063 8.99195 46.0025 7.80508C45.963 7.35368 45.9862 6.92424 46.0721 6.51677C46.1616 6.10506 46.3061 5.73952 46.5055 5.42013C46.7011 5.10109 46.9395 4.84497 47.2206 4.65176C47.5017 4.45856 47.8096 4.34732 48.1442 4.31804C49.0704 4.23701 49.5854 4.78993 49.6892 5.97681C49.728 6.42042 49.7006 6.84631 49.6069 7.25447C49.5171 7.66228 49.3726 8.02783 49.1735 8.3511C48.9743 8.67438 48.7324 8.93473 48.4478 9.13217C48.1628 9.32571 47.8549 9.43695 47.5241 9.46589ZM47.6505 8.96077C47.8023 8.94749 47.9428 8.85089 48.0722 8.67096C48.2051 8.4868 48.315 8.24192 48.402 7.9363C48.489 7.63068 48.5467 7.28252 48.5753 6.89183C48.6038 6.50113 48.5999 6.0976 48.5635 5.68122C48.5359 5.36602 48.4887 5.14075 48.422 5.00543C48.3517 4.87434 48.2504 4.81458 48.1181 4.82616C47.9197 4.84352 47.7325 5.01282 47.5567 5.33405C47.3916 5.64258 47.2693 6.03756 47.1899 6.51897C47.1079 7.01629 47.0885 7.51205 47.1318 8.00625C47.1617 8.3487 47.2187 8.59663 47.3027 8.75005C47.3828 8.9038 47.4988 8.97405 47.6505 8.96077Z" fill="#5860A6" />
                    </svg>


                    {/* Mũi tên cong */}
                    <svg
                      className="absolute -left-[25px] top-[10px]"
                      width="22"
                      height="15"
                      viewBox="0 0 22 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21 1.22266C18.1667 4.88932 10.2 12.2227 1 12.2227M1 12.2227L5 6.72266M1 12.2227C2.33333 12.8893 5.9 14.1227 9.5 13.7227"
                        stroke="#5860A6"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className='grid grid-cols-1 gap-8 place-items-center md:grid-cols-2 lg:grid-cols-3'>
              <div className='w-4/5 bg-white rounded-2xl p-5'>
                <div className='w-full h-2/5'>
                  <div className="justify-start text-orange-500 text-lg font-normal font-['Poppins'] leading-3 mb-4">Basic</div>
                  <div className="justify-start text-slate-700 text-lg font-semibold font-['Sora'] leading-none">Day care</div>
                  <div className="justify-start"><span className="text-blue-950 text-3xl font-bold font-['Sora'] leading-loose">$</span><span className="text-blue-950 text-4xl font-bold font-['Sora'] leading-loose">150</span></div>
                  <div className=" h-11 rounded-[39px] border border-orange-500/60 flex items-center justify-center group hover:bg-orange-500 hover:cursor-pointer">
                    <div className="text-center justify-start text-orange-500 text-base font-medium font-['Poppins'] leading-none group-hover:text-white">Purchase Now</div>
                  </div>
                </div>
                <div className='w-full h-3/5 mt-5 grid grid-cols-1 gap-5'>
                  <div className='flex items-center pl-2'>
                    <FontAwesomeIcon icon={faCheck} className="fa-solid text-xl text-[var(--color-btn)] mr-4" />
                    <div className="justify-start text-slate-500 text-xl font-normal font-['Poppins'] leading-none">Single room</div>
                  </div>
                  <div className='flex items-center pl-2'>
                    <FontAwesomeIcon icon={faCheck} className="fa-solid text-xl text-[var(--color-btn)] mr-4" />
                    <div className="justify-start text-slate-500 text-xl font-normal font-['Poppins'] leading-none">Socialist Exercise</div>
                  </div>
                  <div className='flex items-center pl-2'>
                    <FontAwesomeIcon icon={faCheck} className="fa-solid text-xl text-[var(--color-btn)] mr-4" />
                    <div className="justify-start text-slate-500 text-xl font-normal font-['Poppins'] leading-none">Custom Meals</div>
                  </div>
                  <div className='flex items-center pl-2'>
                    <FontAwesomeIcon icon={faCheck} className="fa-solid text-xl text-[var(--color-btn)] mr-4" />
                    <div className="justify-start text-slate-500 text-xl font-normal font-['Poppins'] leading-none">Spa and Grooming</div>
                  </div>

                  <div className='flex items-center pl-2'>
                    <FontAwesomeIcon icon={faCheck} className="fa-solid text-xl text-[var(--color-btn-rgb)] mr-4" />
                    <div className="justify-start text-slate-500 text-xl font-normal font-['Poppins'] leading-none">Excercise 2x</div>
                  </div>

                  <div className='flex items-center pl-2'>
                    <FontAwesomeIcon icon={faCheck} className="fa-solid text-xl text-[var(--color-btn-rgb)] mr-4" />
                    <div className="justify-start text-slate-500 text-xl font-normal font-['Poppins'] leading-none">Custom Meals</div>
                  </div>

                  <div className='flex items-center pl-2'>
                    <FontAwesomeIcon icon={faCheck} className="fa-solid text-xl text-[var(--color-btn-rgb)] mr-4" />
                    <div className="justify-start text-slate-500 text-xl font-normal font-['Poppins'] leading-none">Grooming 2x</div>
                  </div>
                </div>
              </div>

              <div className='w-4/5 bg-white rounded-2xl p-5'>
                <div className='w-full h-2/5'>
                  <div className="justify-start text-orange-500 text-lg font-normal font-['Poppins'] leading-3 mb-4">Exclusive</div>
                  <div className="justify-start text-slate-700 text-lg font-semibold font-['Sora'] leading-none">2X Care</div>
                  <div className="justify-start"><span className="text-blue-950 text-3xl font-bold font-['Sora'] leading-loose">$</span><span className="text-blue-950 text-4xl font-bold font-['Sora'] leading-loose">199</span></div>
                  <div className=" h-11 rounded-[39px] border bg-orange-500 border-orange-500/60 flex items-center justify-center group hover:cursor-pointer hover:bg-transparent">
                    <div className="text-center justify-start  text-white text-base font-medium font-['Poppins'] leading-none group-hover:text-orange-500">Purchase Now</div>
                  </div>
                </div>
                <div className='w-full h-3/5 mt-5 grid grid-cols-1 gap-5'>

                  <div className='flex items-center pl-2'>
                    <FontAwesomeIcon icon={faCheck} className="fa-solid text-xl text-[var(--color-btn)] mr-4" />
                    <div className="justify-start text-slate-500 text-xl font-normal font-['Poppins'] leading-none">Single room</div>
                  </div>
                  <div className='flex items-center pl-2'>
                    <FontAwesomeIcon icon={faCheck} className="fa-solid text-xl text-[var(--color-btn)] mr-4" />
                    <div className="justify-start text-slate-500 text-xl font-normal font-['Poppins'] leading-none">Socialist Exercise</div>
                  </div>
                  <div className='flex items-center pl-2'>
                    <FontAwesomeIcon icon={faCheck} className="fa-solid text-xl text-[var(--color-btn)] mr-4" />
                    <div className="justify-start text-slate-500 text-xl font-normal font-['Poppins'] leading-none">Custom Meals</div>
                  </div>
                  <div className='flex items-center pl-2'>
                    <FontAwesomeIcon icon={faCheck} className="fa-solid text-xl text-[var(--color-btn)] mr-4" />
                    <div className="justify-start text-slate-500 text-xl font-normal font-['Poppins'] leading-none">Spa and Grooming</div>
                  </div>

                  <div className='flex items-center pl-2'>
                    <FontAwesomeIcon icon={faCheck} className="fa-solid text-xl text-[var(--color-btn-rgb)] mr-4" />
                    <div className="justify-start text-slate-500 text-xl font-normal font-['Poppins'] leading-none">Excercise 2x</div>
                  </div>

                  <div className='flex items-center pl-2'>
                    <FontAwesomeIcon icon={faCheck} className="fa-solid text-xl text-[var(--color-btn-rgb)] mr-4" />
                    <div className="justify-start text-slate-500 text-xl font-normal font-['Poppins'] leading-none">Custom Meals</div>
                  </div>

                  <div className='flex items-center pl-2'>
                    <FontAwesomeIcon icon={faCheck} className="fa-solid text-xl text-[var(--color-btn-rgb)] mr-4" />
                    <div className="justify-start text-slate-500 text-xl font-normal font-['Poppins'] leading-none">Grooming 2x</div>
                  </div>
                </div>
              </div>

              <div className='w-4/5 bg-white rounded-2xl p-5'>
                <div className='w-full h-2/5'>
                  <div className="justify-start text-orange-500 text-lg font-normal font-['Poppins'] leading-3 mb-4">Platinum</div>
                  <div className="justify-start text-slate-700 text-lg font-semibold font-['Sora'] leading-none">4X Care</div>
                  <div className="justify-start"><span className="text-blue-950 text-3xl font-bold font-['Sora'] leading-loose">$</span><span className="text-blue-950 text-4xl font-bold font-['Sora'] leading-loose">299</span></div>
                  <div className=" h-11 rounded-[39px] border border-orange-500/60 flex items-center justify-center group hover:bg-orange-500 hover:cursor-pointer">
                    <div className="text-center justify-start text-orange-500 text-base font-medium font-['Poppins'] leading-none group-hover:text-white">Purchase Now</div>
                  </div>
                </div>
                <div className='w-full h-3/5 mt-5 grid grid-cols-1 gap-5'>

                  <div className='flex items-center pl-2'>
                    <FontAwesomeIcon icon={faCheck} className="fa-solid text-xl text-[var(--color-btn)] mr-4" />
                    <div className="justify-start text-slate-500 text-xl font-normal font-['Poppins'] leading-none">Single room</div>
                  </div>
                  <div className='flex items-center pl-2'>
                    <FontAwesomeIcon icon={faCheck} className="fa-solid text-xl text-[var(--color-btn)] mr-4" />
                    <div className="justify-start text-slate-500 text-xl font-normal font-['Poppins'] leading-none">Socialist Exercise</div>
                  </div>
                  <div className='flex items-center pl-2'>
                    <FontAwesomeIcon icon={faCheck} className="fa-solid text-xl text-[var(--color-btn)] mr-4" />
                    <div className="justify-start text-slate-500 text-xl font-normal font-['Poppins'] leading-none">Custom Meals</div>
                  </div>
                  <div className='flex items-center pl-2'>
                    <FontAwesomeIcon icon={faCheck} className="fa-solid text-xl text-[var(--color-btn)] mr-4" />
                    <div className="justify-start text-slate-500 text-xl font-normal font-['Poppins'] leading-none">Spa and Grooming</div>
                  </div>

                  <div className='flex items-center pl-2'>
                    <FontAwesomeIcon icon={faCheck} className="fa-solid text-xl text-[var(--color-btn-rgb)] mr-4" />
                    <div className="justify-start text-slate-500 text-xl font-normal font-['Poppins'] leading-none">Excercise 2x</div>
                  </div>

                  <div className='flex items-center pl-2'>
                    <FontAwesomeIcon icon={faCheck} className="fa-solid text-xl text-[var(--color-btn-rgb)] mr-4" />
                    <div className="justify-start text-slate-500 text-xl font-normal font-['Poppins'] leading-none">Custom Meals</div>
                  </div>

                  <div className='flex items-center pl-2'>
                    <FontAwesomeIcon icon={faCheck} className="fa-solid text-xl text-[var(--color-btn-rgb)] mr-4" />
                    <div className="justify-start text-slate-500 text-xl font-normal font-['Poppins'] leading-none">Grooming 2x</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className='w-11/12 mx-auto @container'>
            <div className='lg:flex'>
              <div className='max-sm:hidden md:hidden lg:flex lg:items-center'>
                <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="27" cy="26.9985" r="26.25" stroke="#FFD1C4" stroke-width="1.5" />
                  <path d="M33.875 26.9985H20.125" stroke="#FF5B2E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M25.75 21.3735L20.125 26.9985L25.75 32.6235" stroke="#FF5B2E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

              </div>

              <div className='flex flex-col lg:flex-row'>
                <div className='w-full flex justify-center relative h-[var(--height-322)] md:h-[var(--height-412)] lg:grow-3'>
                  <img className='z-10 rounded-full' src="/images/reviews.png" alt="" />
                  <div className='w-[var(--w-70-percents)] bg-[#ffda54] h-full absolute bottom-0 rounded-full md:w-1/2 lg:w-[var(--w-70-percents)]'></div>
                </div>

                <div className='text-center grid grid-cols-1 gap-8 lg:gap-0 lg:auto-rows-[30%] '>
                  <h2 className='text-blue-950 text-5xl font-bold font-sora leading-16'>Our Reviews</h2>
                  <p className='text-black text-lg font-normal font-poppins leading-7 md:text-2xl lg:text-lg'>
                    “It was very comforting to recieve a text and pics each day about our pets and how they were doing.
                    It was also nice that my pets were in the comfortable environment of their own home and received playfull
                    attention from our pet sitters as well. Thanks so much!”
                  </p>
                  <div className='flex justify-center items-center'>
                    <div className="w-5 h-0 outline-2 outline-offset-[-1px] outline-black mr-5"></div>
                    <div className="justify-start text-zinc-800 text-lg font-semibold font-['Sora'] leading-none md:text-2xl">Karla Deras</div>
                  </div>
                </div>
              </div>

              <div className='max-sm:hidden md:hidden lg:flex lg:items-center'>
                <svg width="108" height="108" viewBox="0 0 108 108" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_d_11_797)">
                    <circle cx="27" cy="27" r="27" transform="matrix(-1 0 0 1 81 21.9985)" fill="#FF5B2E" />
                  </g>
                  <path d="M47.125 48.9985H60.875" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M55.25 43.3735L60.875 48.9985L55.25 54.6235" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <defs>
                    <filter id="filter0_d_11_797" x="0" y="-0.00146484" width="108" height="108" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset dy="5" />
                      <feGaussianBlur stdDeviation="13.5" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.356863 0 0 0 0 0.180392 0 0 0 0.3 0" />
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_11_797" />
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_11_797" result="shape" />
                    </filter>
                  </defs>
                </svg>

              </div>
            </div>
            <div className='flex justify-center mt-8'>
              <div className="w-16 h-2 relative rounded">
                <div className="w-6 h-2 left-0 top-0 absolute bg-orange-500 rounded"></div>
                <div className="w-2 h-2 left-[32px] top-0 absolute rounded border border-orange-500"></div>
                <div className="w-2 h-2 left-[48px] top-0 absolute rounded border border-orange-500"></div>
                <div className="w-2 h-2 left-[64px] top-0 absolute rounded border border-orange-500"></div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className='mx-auto w-11/12 @container'>
            <div className='text-center lg:flex lg:justify-between'>
              <h2 className="text-blue-950 text-5xl font-bold font-['Sora'] leading-16 mb-5 lg:w-3/5 lg:text-left lg:pl-10">Our Blog</h2>
              <div className='lg:w-2/5'>
                <p className="text-slate-500 text-lg font-normal font-['Poppins'] leading-loose md:text-2xl">Stay up to date with the latest tech trands and news in the pets.</p>
                <button className="mt-7 w-44 h-14 rounded-[31px]  border border-orange-500 text-orange-500
                                font-medium text-lg hover:transition hover:shadow-[0px_13px_26px_-8px_rgba(255,91,46,0.42)] hover:ease-linear hover:duration-300
                                hover:cursor-pointer
              ">View ALl Blog</button>
              </div>

            </div>
            <ul className='grid grid-cols-1 gap-10 mt-14 md:gap-16 lg:grid-cols-3'>
              <li className='flex justify-center flex-col items-center text-center'>
                <a className='w-80 h-80 bg-blue-300 rounded-3xl relative' href="">

                  <div className=" left-[1.625rem] top-[1.625rem] absolute justify-start text-white text-sm font-normal font-['Sora'] leading-none md:text-2xl">21 june 2021</div>
                  <img className="w-11/12 h-4/5 absolute bottom-0 right-0" src="/images/blog-1.png" />
                </a>
                <a href="">
                  <h3 className='text-blue-950 text-xl font-semibold font-sora leading-loose md:text-2xl lg:text-xl'>
                    Building Bonds and Trusting Relationships with Your Pets.
                  </h3>
                  <p className='text-slate-500 text-lg font-normal font-poppins leading-normal md:text-2xl lg:text-sm'>
                    There isn’t a relationship around that can survive without trust. My relationship with my dog Peyton is deep...
                  </p>
                </a>
              </li>

              <li className='flex justify-center flex-col items-center text-center'>
                <a className='w-80 h-80 bg-[var(--color-article-2)] rounded-3xl relative' href="">

                  <div className=" left-[1.625rem] top-[1.625rem] absolute justify-start text-white text-sm font-normal font-['Sora'] leading-none md:text-2xl">28 june 2021</div>
                  <img className="w-11/12 h-4/5 absolute bottom-0 right-0" src="/images/blog-2.png" />
                </a>
                <a href="">
                  <h3 className='text-blue-950 text-xl font-semibold font-sora leading-loose md:text-2xl lg:text-xl'>
                    Celebrity pet photographer Grace Chon on taking ...
                  </h3>
                  <p className='text-slate-500 text-lg font-normal font-poppins leading-normal md:text-2xl lg:text-sm'>
                    Doting pet parents have a relentless need to constantly photograph every adorable pet moment...
                  </p>
                </a>
              </li>

              <li className='flex justify-center flex-col items-center text-center'>
                <a className='w-80 h-80 bg-[var(--color-article-3)] rounded-3xl relative' href="">

                  <div className=" left-[1.625rem] top-[1.625rem] absolute justify-start text-white text-sm font-normal font-['Sora'] leading-none md:text-2xl">10 july 2021</div>
                  <img className="w-11/12 h-4/5 absolute bottom-0 right-0" src="/images/blog-3.png" />
                </a>
                <a href="">
                  <h3 className='text-blue-950 text-xl font-semibold font-sora leading-loose md:text-2xl lg:text-xl'>
                    5 Simple Tricks To Create A More Conscious ...
                  </h3>
                  <p className='text-slate-500 text-lg font-normal font-poppins leading-normal md:text-2xl lg:text-sm'>
                    It is easy to forget that animals are living creatures with a beating heart.
                  </p>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main >

      <footer>
        <div className=' @container text-center lg:flex'>
          <div className='grid grid-cols-1 gap-8 place-items-center bg-[var(--color-bg-2)] py-5 px-5 lg:w-2/5'>
            <svg xmlns="http://www.w3.org/2000/svg" width="103" height="38" viewBox="0 0 103 38" fill="none">
              <path d="M45 25.5005V7H49.176V21.8511H56.4585V25.5005H45Z" fill="#000958" />
              <path d="M63.3571 25.9314C61.7444 25.9314 60.5052 25.416 59.6395 24.3854C58.7737 23.3548 58.3408 21.7835 58.3408 19.6716V11.6125H62.415V19.8743C62.415 20.6177 62.6272 21.2091 63.0515 21.6484C63.4759 22.0876 64.0446 22.3073 64.7576 22.3073C65.4875 22.3073 66.0817 22.0792 66.54 21.623C66.9984 21.1668 67.2275 20.5502 67.2275 19.773V11.6125H71.3017V25.5005H68.0678V22.2566C67.4907 24.7064 65.9798 25.9314 63.5353 25.9314H63.3571Z" fill="#000958" />
              <path d="M81.3223 25.982C80.117 25.982 79.0646 25.7878 78.1649 25.3992C77.2821 24.9937 76.5437 24.453 75.9495 23.7772C75.3554 23.1014 74.914 22.3411 74.6254 21.4963C74.3369 20.6346 74.1926 19.7476 74.1926 18.8353V18.3537C74.1926 17.0866 74.4557 15.9039 74.9819 14.8057C75.5252 13.7075 76.323 12.8205 77.3755 12.1447C78.445 11.4688 79.7521 11.1309 81.2968 11.1309C82.553 11.1309 83.6649 11.3759 84.6326 11.8659C85.6002 12.339 86.3725 13.0063 86.9497 13.868C87.5269 14.7297 87.8494 15.7181 87.9173 16.8332H83.9196C83.8517 16.208 83.597 15.6843 83.1557 15.2619C82.7143 14.8226 82.0947 14.603 81.2968 14.603C80.2613 14.603 79.4974 14.9747 79.0051 15.7181C78.5129 16.4446 78.2667 17.4076 78.2667 18.6072C78.2667 19.7392 78.4959 20.6769 78.9542 21.4203C79.4295 22.1468 80.2189 22.51 81.3223 22.51C82.1371 22.51 82.7737 22.2988 83.2321 21.8765C83.6904 21.4541 83.962 20.8965 84.0469 20.2038H88.0192C87.9513 21.3527 87.6203 22.3664 87.0261 23.245C86.4489 24.1067 85.6596 24.7825 84.658 25.2724C83.6734 25.7455 82.5615 25.982 81.3223 25.982Z" fill="#000958" />
              <path d="M93.1711 25.1964L88.8933 11.6125H92.9929L96.074 22.0285H96.5832L99.1296 11.6125H103L99.1041 26.6156C98.8155 27.6969 98.4251 28.5586 97.9328 29.2006C97.4575 29.8427 96.8124 30.2988 95.9976 30.5692C95.1997 30.8564 94.1897 31 92.9674 31H90.472V27.5533H93.3748C94.0199 27.5533 94.5207 27.4266 94.8772 27.1732C95.2506 26.9197 95.5223 26.4636 95.692 25.8046L95.8193 25.1964H93.1711Z" fill="#000958" />
              <path d="M16.5062 25.9395C18.4079 25.9395 18.4079 27.8592 20.334 27.8592C23.2047 27.8592 23.4762 24.1622 21.5771 22.2769C19.6779 20.3917 19.6754 17.8779 16.5062 17.8779C13.3371 17.8779 13.3371 20.3917 11.4354 22.2769C9.53381 24.1622 9.80781 27.9328 12.6785 27.9328C14.6046 27.9328 14.6046 25.9395 16.5062 25.9395Z" fill="#000958" />
              <path d="M13.2029 15.9642C14.5773 15.7671 15.4717 14.0753 15.2006 12.1854C14.9296 10.2956 13.5957 8.92345 12.2213 9.12059C10.8468 9.31773 9.95241 11.0095 10.2235 12.8993C10.4945 14.7892 11.8285 16.1613 13.2029 15.9642Z" fill="#000958" />
              <path d="M22.7839 12.8858C23.055 10.996 22.1605 9.30423 20.7861 9.10709C19.4117 8.90996 18.0778 10.2821 17.8067 12.1719C17.5357 14.0618 18.4301 15.7536 19.8045 15.9507C21.1789 16.1478 22.5128 14.7757 22.7839 12.8858Z" fill="#000958" />
              <path d="M8.93682 20.2525C9.87392 19.7985 10.1429 18.4176 9.5376 17.1682C8.93231 15.9187 7.68195 15.2738 6.74486 15.7278C5.80776 16.1818 5.53878 17.5627 6.14408 18.8122C6.74937 20.0616 7.99973 20.7065 8.93682 20.2525Z" fill="#000958" />
              <path d="M26.8611 18.7967C27.4664 17.5472 27.1974 16.1663 26.2603 15.7123C25.3232 15.2584 24.0729 15.9032 23.4676 17.1527C22.8623 18.4022 23.1312 19.7831 24.0683 20.237C25.0054 20.691 26.2558 20.0461 26.8611 18.7967Z" fill="#000958" />
              <path d="M16.6587 0C26.7883 0 35 8.2117 35 18.3413C35 29.4827 25.4087 39.5433 12.6202 36.6827C10.2644 36.0096 6.56249 34.3269 4.54326 33.3173C2.52403 32.3077 2.86057 31.803 3.02884 31.6347C3.19711 31.4664 3.87018 31.1299 5.04807 31.6347C5.34307 31.7611 5.67367 31.91 6.03427 32.0724C7.11345 32.5583 8.46131 33.1652 9.92788 33.6539C10.9375 33.9904 12.6202 33.9904 13.4615 33.4856C13.9247 33.2077 14.6094 32.2776 14.1346 31.8029C13.7981 31.4663 12.7885 31.4663 11.1058 31.9712C9.42308 32.476 8.58173 31.6346 9.59135 30.9615C10.601 30.2885 12.2837 29.9519 14.4712 30.1202C15.217 30.1776 15.8259 30.2545 16.4313 30.331C17.6014 30.4788 18.7583 30.625 20.8654 30.625C27.6559 30.625 31.6346 24.6708 31.6346 18.3413C31.6346 10.0704 24.9296 3.36538 16.6587 3.36538C8.38766 3.36538 1.68269 10.0704 1.68269 18.3413C1.68269 23.1594 3.95792 27.446 7.49255 30.1855C2.95172 26.8817 0 21.5258 0 15.4806C0 6.35168 7.61916 0 16.6587 0Z" fill="url(#paint0_linear_11_1219)" />
              <defs>
                <linearGradient id="paint0_linear_11_1219" x1="17.5" y1="0" x2="18.5" y2="47" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FF592C" />
                  <stop offset="1" stopColor="#FF592C" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <div>
              Enter your email
              <div className="w-64 h-11 bg-white rounded-3xl shadow-[0px_11px_16px_-10px_rgba(204,116,28,0.17)] border border-orange-500/25 relative">
                <div className='h-11 w-11 rounded-full bg-[var(--color-circle-arrow)] flex justify-center items-center absolute right-0'>
                  <FontAwesomeIcon icon={faArrowRight} className="fa-solid text-lg text-white" width={20} />
                </div>
              </div>
            </div>
            <div>
              <div className="text-center text-blue-950 text-lg font-semibold font-['Sora'] leading-tight">Follow Us</div>
              <div className='flex mt-5'>
                <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_d_11_733)">
                    <circle cx="34" cy="18" r="16" fill="white" />
                    <circle cx="34" cy="18" r="15.5" stroke="white" />
                  </g>
                  <path opacity="0.7" d="M39.4444 11H28.5556C27.7 11 27 11.7 27 12.5556V23.4444C27 24.3008 27.7 25 28.5556 25H34V19.5556H32.4444V17.6306H34V16.0361C34 14.353 34.9427 13.1708 36.9291 13.1708L38.3314 13.1723V15.1984H37.4004C36.6273 15.1984 36.3333 15.7787 36.3333 16.3169V17.6313H38.3307L37.8889 19.5556H36.3333V25H39.4444C40.3 25 41 24.3008 41 23.4444V12.5556C41 11.7 40.3 11 39.4444 11Z" fill="#000958" />
                  <defs>
                    <filter id="filter0_d_11_733" x="0" y="0" width="68" height="68" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feMorphology radius="10" operator="erode" in="SourceAlpha" result="effect1_dropShadow_11_733" />
                      <feOffset dy="16" />
                      <feGaussianBlur stdDeviation="14" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0.828597 0 0 0 0 0.519175 0 0 0 0 0.209752 0 0 0 0.33 0" />
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_11_733" />
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_11_733" result="shape" />
                    </filter>
                  </defs>
                </svg>

                <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_d_11_736)">
                    <circle cx="34" cy="18" r="16" fill="white" />
                    <circle cx="34" cy="18" r="15.5" stroke="white" />
                  </g>
                  <path opacity="0.7" d="M31.5834 23.9998C32.7022 24.007 33.8112 23.7889 34.8462 23.3583C35.8812 22.9277 36.8215 22.2931 37.6126 21.4913C38.4037 20.6896 39.0299 19.7366 39.4548 18.6877C39.8797 17.6388 40.0948 16.5148 40.0878 15.381V14.9849C40.6677 14.5543 41.1697 14.0252 41.5714 13.4209C41.0253 13.663 40.4475 13.8235 39.856 13.8975C40.4831 13.5188 40.9537 12.9226 41.1806 12.2194C40.5962 12.5748 39.9552 12.8246 39.2864 12.9578C38.8359 12.4714 38.2399 12.1489 37.5904 12.0404C36.941 11.9319 36.2743 12.0433 35.6937 12.3574C35.113 12.6715 34.6507 13.1708 34.3782 13.7781C34.1057 14.3853 34.0383 15.0666 34.1864 15.7166C32.9981 15.6575 31.8355 15.3454 30.7742 14.8007C29.7129 14.256 28.7767 13.4908 28.0266 12.555C27.6484 13.2203 27.5337 14.0065 27.7059 14.7542C27.8781 15.502 28.3242 16.1555 28.9539 16.5825C28.4893 16.5644 28.0355 16.4356 27.6292 16.2066V16.2402C27.6251 16.9355 27.8562 17.6112 28.2841 18.1548C28.7119 18.6983 29.3107 19.0768 29.9805 19.2272C29.5484 19.345 29.0958 19.3634 28.6558 19.2809C28.8498 19.8739 29.2199 20.3916 29.7156 20.7629C30.2113 21.1343 30.8082 21.3411 31.4244 21.3551C30.3708 22.2147 29.0613 22.6878 27.7087 22.6976C27.4716 22.6906 27.235 22.6705 27 22.6372C28.369 23.5212 29.9601 23.9872 31.5834 23.9797" fill="#000958" />
                  <defs>
                    <filter id="filter0_d_11_736" x="0" y="0" width="68" height="68" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feMorphology radius="10" operator="erode" in="SourceAlpha" result="effect1_dropShadow_11_736" />
                      <feOffset dy="16" />
                      <feGaussianBlur stdDeviation="14" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0.828597 0 0 0 0 0.519175 0 0 0 0 0.209752 0 0 0 0.33 0" />
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_11_736" />
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_11_736" result="shape" />
                    </filter>
                  </defs>
                </svg>

                <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_d_11_739)">
                    <circle cx="34" cy="18" r="16" fill="white" />
                    <circle cx="34" cy="18" r="15.5" stroke="white" />
                  </g>
                  <path opacity="0.7" d="M40.2222 11H27.7778C27.5715 11 27.3737 11.0819 27.2278 11.2278C27.0819 11.3737 27 11.5715 27 11.7778V24.2222C27 24.4285 27.0819 24.6263 27.2278 24.7722C27.3737 24.9181 27.5715 25 27.7778 25H40.2222C40.4285 25 40.6263 24.9181 40.7722 24.7722C40.9181 24.6263 41 24.4285 41 24.2222V11.7778C41 11.5715 40.9181 11.3737 40.7722 11.2278C40.6263 11.0819 40.4285 11 40.2222 11ZM31.1526 22.9288H29.0743V16.2477H31.1526V22.9288ZM30.1134 15.3353C29.7941 15.3353 29.4879 15.2085 29.2621 14.9827C29.0363 14.7569 28.9094 14.4507 28.9094 14.1313C28.9094 13.812 29.0363 13.5058 29.2621 13.28C29.4879 13.0542 29.7941 12.9273 30.1134 12.9273C30.4328 12.9273 30.739 13.0542 30.9648 13.28C31.1906 13.5058 31.3174 13.812 31.3174 14.1313C31.3174 14.4507 31.1906 14.7569 30.9648 14.9827C30.739 15.2085 30.4328 15.3353 30.1134 15.3353ZM38.9296 22.9288H36.8537V19.68C36.8537 18.9053 36.8397 17.909 35.7741 17.909C34.693 17.909 34.5289 18.7537 34.5289 19.6256V22.9296H32.4546V16.2484H34.4457V17.1616H34.4744C34.7506 16.6366 35.4288 16.0828 36.4376 16.0828C38.5407 16.0828 38.9288 17.4657 38.9288 19.2654V22.9288H38.9296Z" fill="#000958" />
                  <defs>
                    <filter id="filter0_d_11_739" x="0" y="0" width="68" height="68" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feMorphology radius="10" operator="erode" in="SourceAlpha" result="effect1_dropShadow_11_739" />
                      <feOffset dy="16" />
                      <feGaussianBlur stdDeviation="14" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0.828597 0 0 0 0 0.519175 0 0 0 0 0.209752 0 0 0 0.33 0" />
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_11_739" />
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_11_739" result="shape" />
                    </filter>
                  </defs>
                </svg>

                <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_d_11_739)">
                    <circle cx="34" cy="18" r="16" fill="white" />
                    <circle cx="34" cy="18" r="15.5" stroke="white" />
                  </g>
                  <path opacity="0.7" d="M40.2222 11H27.7778C27.5715 11 27.3737 11.0819 27.2278 11.2278C27.0819 11.3737 27 11.5715 27 11.7778V24.2222C27 24.4285 27.0819 24.6263 27.2278 24.7722C27.3737 24.9181 27.5715 25 27.7778 25H40.2222C40.4285 25 40.6263 24.9181 40.7722 24.7722C40.9181 24.6263 41 24.4285 41 24.2222V11.7778C41 11.5715 40.9181 11.3737 40.7722 11.2278C40.6263 11.0819 40.4285 11 40.2222 11ZM31.1526 22.9288H29.0743V16.2477H31.1526V22.9288ZM30.1134 15.3353C29.7941 15.3353 29.4879 15.2085 29.2621 14.9827C29.0363 14.7569 28.9094 14.4507 28.9094 14.1313C28.9094 13.812 29.0363 13.5058 29.2621 13.28C29.4879 13.0542 29.7941 12.9273 30.1134 12.9273C30.4328 12.9273 30.739 13.0542 30.9648 13.28C31.1906 13.5058 31.3174 13.812 31.3174 14.1313C31.3174 14.4507 31.1906 14.7569 30.9648 14.9827C30.739 15.2085 30.4328 15.3353 30.1134 15.3353ZM38.9296 22.9288H36.8537V19.68C36.8537 18.9053 36.8397 17.909 35.7741 17.909C34.693 17.909 34.5289 18.7537 34.5289 19.6256V22.9296H32.4546V16.2484H34.4457V17.1616H34.4744C34.7506 16.6366 35.4288 16.0828 36.4376 16.0828C38.5407 16.0828 38.9288 17.4657 38.9288 19.2654V22.9288H38.9296Z" fill="#000958" />
                  <defs>
                    <filter id="filter0_d_11_739" x="0" y="0" width="68" height="68" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feMorphology radius="10" operator="erode" in="SourceAlpha" result="effect1_dropShadow_11_739" />
                      <feOffset dy="16" />
                      <feGaussianBlur stdDeviation="14" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0.828597 0 0 0 0 0.519175 0 0 0 0 0.209752 0 0 0 0.33 0" />
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_11_739" />
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_11_739" result="shape" />
                    </filter>
                  </defs>
                </svg>


              </div>
            </div>
          </div>
          <div className='grid grid-cols-1 gap-8 py-5 px-5 md:grid-cols-2 lg:w-3/5'>
            <div>
              <h4 className='text-blue-950 text-lg font-semibold font-sora leading-tight mb-3'>Explore</h4>
              <ul className='text-slate-500 text-sm font-normal font-poppins leading-7'>
                <li>About Us</li>
                <li>Services</li>
                <li>Our Team</li>
                <li>Adopt Pet</li></ul>
            </div>

            <div>
              <h4 className='text-blue-950 text-lg font-semibold font-sora leading-tight mb-3'>Useful links</h4>
              <ul className='text-slate-500 text-sm font-normal font-poppins leading-7'>
                <li>FAQs</li>
                <li>Shop</li>
                <li>Privacy Policy</li>
                <li>Terms of Use</li>
                <li>Site Map</li>
              </ul>
            </div>

            <div>
              <h4 className='text-blue-950 text-lg font-semibold font-sora leading-tight mb-3'>Contact Info</h4>
              <ul className='text-slate-500 text-sm font-normal font-poppins leading-7'>
                <li>abc@gmail.com</li>
                <li> 0 (800)-000-00-00</li>
                <li> New York, NY, Rocawy 7</li>
              </ul>
            </div>

            <div>
              <h4 className='text-blue-950 text-lg font-semibold font-sora leading-tight mb-3'>Opening Time</h4>
              <ul className='text-slate-500 text-sm font-normal font-poppins leading-7'>
                <li>Mon – Fri : 08.00 am – 20.00 pm</li>
                <li> Saturday : 09.00 am – 20.00 pm</li>
                <li>Sunday: We are Closed</li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" text-slate-500 text-lg font-normal font-['Poppins'] leading-none text-center lg:mt-8">Copyright & Design By Uihut</div>
      </footer>
    </div >
  );
}
