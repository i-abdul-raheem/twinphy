export const Share = () => {
  return (
    <button
      className='item-content item-link action-btn bg-primary d-flex'
      data-bs-toggle='offcanvas'
      data-bs-target='#offcanvasBottom1'
      aria-controls='offcanvasBottom'
      style={{ border: 'none', background: 'none' }}
    >
      <svg
        width='15'
        height='14'
        viewBox='0 0 15 14'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M14.7566 4.93237L9.60021 0.182841C9.14886 -0.23294 8.4375 0.104591 8.4375 0.750465V3.25212C3.73157 3.30959 0 4.31562 0 9.07267C0 10.9927 1.1596 12.8948 2.4414 13.8893C2.84139 14.1996 3.41145 13.8101 3.26397 13.3071C1.93553 8.77542 3.89405 7.57236 8.4375 7.50264V10.25C8.4375 10.8969 9.14942 11.2329 9.60021 10.8176L14.7566 6.06761C15.0809 5.7688 15.0814 5.23158 14.7566 4.93237Z'
          fill='#E4BEAB'
        />
      </svg>
    </button>
  );
};
