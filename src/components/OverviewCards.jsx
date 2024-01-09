
const AmountCard1=()=>
{
    return (
        <li className='rounded-lg grow flex flex-col space-y-4 p-5 bg-white' style={{boxShadow: "0px 2px 6px 0px rgba(26, 24, 30, 0.04)"}}>
            <header className='flex space-x-2 items-center text-text'>
                <h1>Online orders</h1>
            </header>
            
            <h1 className='text-dark text-[32px] leading-[38px] font-medium grow max-sm:text-3xl'>231</h1>
            
        </li>
    )
}

const AmountCard=({processed})=>
{
    return (
        <li className='rounded-lg grow flex flex-col space-y-4 p-5 bg-white' style={{boxShadow: "0px 2px 6px 0px rgba(26, 24, 30, 0.04)"}}>
            <header className='flex space-x-2 items-center text-text'>
                <h1>Amount Pending</h1>
                <svg className='hover:cursor-pointer' width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M9.54966 11.6358C9.54966 12.1266 9.15178 12.5245 8.66096 12.5245C8.17015 12.5245 7.77227 12.1266 7.77227 11.6358C7.77227 11.145 8.17015 10.7471 8.66096 10.7471C9.15178 10.7471 9.54966 11.145 9.54966 11.6358Z" fill="#4D4D4D"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M7.66328 3.89508C8.13964 3.69776 8.66381 3.64614 9.16951 3.74673C9.67521 3.84732 10.1397 4.09561 10.5043 4.4602C10.8689 4.82479 11.1172 5.2893 11.2178 5.79501C11.3184 6.30071 11.2668 6.82488 11.0694 7.30124C10.8721 7.7776 10.538 8.18475 10.1093 8.47121C9.8303 8.65761 9.51944 8.78746 9.19425 8.85542V8.96969C9.19425 9.26425 8.95547 9.50303 8.66092 9.50303C8.36637 9.50303 8.12758 9.26425 8.12758 8.96969V8.37723C8.12758 8.23578 8.18377 8.10012 8.28379 8.0001C8.38381 7.90008 8.51947 7.84389 8.66092 7.84389C8.96556 7.84389 9.26336 7.75356 9.51666 7.58431C9.76996 7.41506 9.96738 7.1745 10.084 6.89304C10.2005 6.61159 10.2311 6.30189 10.1716 6.0031C10.1122 5.70431 9.96549 5.42986 9.75007 5.21444C9.53466 4.99903 9.2602 4.85233 8.96141 4.7929C8.66263 4.73347 8.35292 4.76397 8.07147 4.88055C7.79002 4.99713 7.54946 5.19456 7.38021 5.44786C7.21096 5.70116 7.12062 5.99896 7.12062 6.3036C7.12062 6.59815 6.88184 6.83693 6.58729 6.83693C6.29274 6.83693 6.05395 6.59815 6.05395 6.3036C6.05395 5.78799 6.20685 5.28396 6.49331 4.85525C6.77976 4.42653 7.18692 4.09239 7.66328 3.89508Z" fill="#4D4D4D"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.66094 1.86745C5.27359 1.86745 2.5276 4.61343 2.5276 8.00078C2.5276 11.3881 5.27359 14.1341 8.66094 14.1341C12.0483 14.1341 14.7943 11.3881 14.7943 8.00078C14.7943 4.61343 12.0483 1.86745 8.66094 1.86745ZM1.46094 8.00078C1.46094 4.02433 4.68449 0.800781 8.66094 0.800781C12.6374 0.800781 15.8609 4.02433 15.8609 8.00078C15.8609 11.9772 12.6374 15.2008 8.66094 15.2008C4.68449 15.2008 1.46094 11.9772 1.46094 8.00078Z" fill="#4D4D4D"/>
                </svg>
            </header>
            {processed
            ?<h1 className='text-dark text-[32px] leading-[38px] font-medium grow max-sm:text-3xl'>₹23,92,312.19</h1>
            :(<main className='flex items-center'>
                <h1 className='text-dark text-[32px] leading-[38px] font-medium grow max-sm:text-2xl max-sm:mr-3'>₹92,312.20</h1>
            </main>)}
        </li>
    )
}

const OverviewCards = () => {
  return (
    <ul className=' flex items-start space-x-5 max-sm:flex-col max-sm:space-x-0 max-sm:space-y-3 max-sm:w-screen max-sm:items-stretch max-sm:px-3'>
        <AmountCard1 />
        <AmountCard processed={true} />
    </ul>
  )
}

export default OverviewCards