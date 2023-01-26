export const IconBookmark = (props) => {
  return (
    <svg
      width='17'
      height='21'
      viewBox='0 0 17 21'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M14.919 20.1903C15.08 20.3063 15.282 20.3763 15.5 20.3763C16.052 20.3763 16.5 19.9283 16.5 19.3763V3.37628C16.5 2.54828 16.163 1.79628 15.621 1.25528C15.079 0.714282 14.328 0.376282 13.5 0.376282H3.50001C2.67201 0.376282 1.92001 0.713282 1.37901 1.25528C0.838012 1.79728 0.500012 2.54828 0.500012 3.37628V19.3763C0.499012 19.5753 0.560012 19.7803 0.686012 19.9573C1.00701 20.4063 1.63201 20.5113 2.08101 20.1893L8.50001 15.6053L14.919 20.1903ZM14.5 17.4333L9.08101 13.5623C8.72601 13.3083 8.26201 13.3203 7.91901 13.5623L2.50001 17.4333V3.37628C2.50001 3.10028 2.61101 2.85128 2.79301 2.66928C2.97501 2.48728 3.22401 2.37628 3.50001 2.37628H13.5C13.776 2.37628 14.025 2.48728 14.207 2.66928C14.389 2.85128 14.5 3.10028 14.5 3.37628V17.4333Z'
        fill='black'
      />
      {props.isBookmarked && (
        <path
          d='M14.5 17.4333L9.081 13.5623C8.726 13.3083 8.262 13.3203 7.919 13.5623L2.5 17.4333V3.37628C2.5 3.10028 2.611 2.85128 2.793 2.66928C2.975 2.48728 3.224 2.37628 3.5 2.37628H13.5C13.776 2.37628 14.025 2.48728 14.207 2.66928C14.389 2.85128 14.5 3.10028 14.5 3.37628V17.4333Z'
          fill='#67B930'
        />
      )}
    </svg>
  );
};
