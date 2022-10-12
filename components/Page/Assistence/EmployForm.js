const EmployForm = () => {
  return (
    <div className='py-16 px-32 overflow-hidden'>
      <div>
        <h4 className='text-4xl font-semibold mb-10'>مشخصات فردی</h4>
        <div className='grid justify-items-start grid-cols-2 gap-y-10 gap-x-10'>
          <div className='flex flex-col w-full'>
            <label className='text-2xl' htmlFor='name'>
              نام
            </label>
            <input
              className='text-2xl border border-solid border-gray-300 bg-gray-100 outline-none 
              p-2 rounded-md mt-2 w-full'
              type='text'
              id='name'
              placeholder='نام'
            />
          </div>
          <div className='flex flex-col w-full'>
            <label className='text-2xl' htmlFor='family'>
              نام خانوادگی
            </label>
            <input
              className='text-2xl border border-solid border-gray-300 bg-gray-100 outline-none 
              p-2 rounded-md mt-2 w-full'
              type='text'
              id='family'
              placeholder='نام خانوادگی'
            />
          </div>
          <div className='flex flex-col w-full'>
            <label className='text-2xl' htmlFor='father'>
              نام پدر
            </label>
            <input
              className='text-2xl border border-solid border-gray-300 bg-gray-100 outline-none 
              p-2 rounded-md mt-2 w-full'
              type='text'
              id='father'
              placeholder='نام پدر'
            />
          </div>
          <div className='flex flex-col w-full'>
            <span className='text-2xl mb-2'>تاریخ تولد</span>
            <div className='flex'>
              <select
                className='mx-2 bg-gray-100 text-2xl p-2 rounded-lg border border-solid
                border-gray-300 w-1/3'
                name='year'
                id='year'
              >
                <option value='1401'>1401</option>
                <option value='1400'>1400</option>
                <option value='1399'>1399</option>
              </select>
              <select
                className='mx-2 bg-gray-100 text-2xl p-2 rounded-lg border border-solid
                border-gray-300 w-1/3'
                name='month'
                id='month'
              >
                <option value='farvardin'>فروردین</option>
                <option value='ordibehesht'>اردیبهشت</option>
                <option value='khordad'>خرداد</option>
              </select>
              <select
                className='mx-2 bg-gray-100 text-2xl p-2 rounded-lg border border-solid
                border-gray-300 w-1/3'
                name='day'
                id='day'
              >
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>4</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
              </select>
            </div>
          </div>

          <div className='flex'>
            <h4 className='text-2xl ml-10'>جنسیت:</h4>
            <div className='flex items-start'>
              <input
                className='text-2xl'
                type='radio'
                id='male'
                name='gender'
                value='male'
              />
              <label className='text-2xl mr-1' htmlFor='male'>
                مرد
              </label>
              <input
                className='text-2xl mr-6'
                type='radio'
                id='female'
                name='gender'
                value='female'
              />
              <label className='text-2xl mr-1' htmlFor='female'>
                زن
              </label>
            </div>
          </div>
          <div className='flex'>
            <h4 className='text-2xl ml-10'>وضعیت تاهل:</h4>
            <div className='flex items-start'>
              <input
                className='text-2xl'
                type='radio'
                id='married'
                name='marriage'
                value='married'
              />
              <label className='text-2xl mr-1' htmlFor='married'>
                متاهل
              </label>
              <input
                className='text-2xl mr-6'
                type='radio'
                id='single'
                name='marriage'
                value='single'
              />
              <label className='text-2xl mr-1' htmlFor='single'>
                مجرد
              </label>
            </div>
          </div>
          <div className='flex flex-col w-full'>
            <label className='text-2xl' htmlFor='birthPlace'>
              محل تولد
            </label>
            <input
              className='text-2xl border border-solid border-gray-300 bg-gray-100 outline-none 
              p-2 rounded-md mt-2 w-full'
              type='text'
              id='birthPlace'
              placeholder='محل تولد'
            />
          </div>
          <div className='flex flex-col w-full'>
            <label className='text-2xl' htmlFor='codeMelli'>
              کد ملی
            </label>
            <input
              className='text-2xl border border-solid border-gray-300 bg-gray-100 outline-none 
              p-2 rounded-md mt-2 w-full'
              type='number'
              id='codeMelli'
              placeholder='کد ملی'
            />
          </div>
          <div className='flex flex-col w-full'>
            <label className='text-2xl' htmlFor='identifier'>
              شماره شناسنامه
            </label>
            <input
              className='text-2xl border border-solid border-gray-300 bg-gray-100 outline-none 
              p-2 rounded-md mt-2 w-full'
              type='number'
              id='identifier'
              placeholder='شماره شناسنامه'
            />
          </div>
          <div className='flex flex-col w-full'>
            <label className='text-2xl' htmlFor='mobile'>
              شماره همراه
            </label>
            <input
              className='text-2xl border border-solid border-gray-300 bg-gray-100 outline-none 
          p-2 rounded-md mt-2'
              type='number'
              id='mobile'
              placeholder='شماره همراه'
            />
          </div>
          <div className='flex flex-col w-full'>
            <label className='text-2xl' htmlFor='email'>
              ایمیل
            </label>
            <input
              className='text-2xl border border-solid border-gray-300 bg-gray-100 outline-none 
            p-2 rounded-md mt-2'
              type='email'
              id='email'
              placeholder='ایمیل'
            />
          </div>
        </div>
        <hr className='bg-gray-100 h-1 my-6 mt-16' />
        <div className='flex flex-col w-full'>
          <h4 className='text-4xl font-semibold mb-10 mt-6'>آدرس محل سکونت</h4>
          <div className='grid grid-cols-2 gap-y-10 gap-x-10'>
            <div className='flex flex-col w-full'>
              <span className='text-2xl'>استان</span>
              <select
                className='bg-gray-100 text-2xl p-2 rounded-lg border border-solid
                border-gray-300'
                name='province'
                id='province'
              >
                <option value='azarbaijan'>آذربایجان شرقی</option>
                <option value='azarbaijan'>آذربایجان غربی</option>
                <option value='tehran'>تهران</option>
              </select>
            </div>
            <div className='flex flex-col w-full'>
              <span className='text-2xl'>شهر</span>
              <select
                className='bg-gray-100 text-2xl p-2 rounded-lg border border-solid
                border-gray-300'
                name='city'
                id='city'
              >
                <option value='tabriz'>تبریز</option>
                <option value='orumiye'>ارومیه</option>
                <option value='tehran'>تهران</option>
              </select>
            </div>
            <div className='flex flex-col w-full'>
              <label className='text-2xl' htmlFor='phone'>
                شماره تلفن
              </label>
              <input
                className='text-2xl border border-solid border-gray-300 bg-gray-100 outline-none 
                p-2 rounded-md mt-2'
                type='number'
                id='phone'
                placeholder='شماره تلفن'
              />
            </div>
            <div className='flex flex-col w-full'>
              <label className='text-2xl' htmlFor='address'>
                آدرس
              </label>
              <textarea
                className='text-2xl border border-solid border-gray-300 bg-gray-100 outline-none 
           p-2 rounded-md mt-2'
                type='text'
                id='phone'
                placeholder='آدرس'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='w-full flex justify-start'>
        <button
          className='w-[150px] p-4 text-3xl text-white bg-orange-600
      rounded-lg mt-24 transition-all duration-300 ease-in hover:bg-gray-100 hover:text-orange-600'
        >
          ثبت فرم
        </button>
      </div>
    </div>
  );
};

export default EmployForm;
