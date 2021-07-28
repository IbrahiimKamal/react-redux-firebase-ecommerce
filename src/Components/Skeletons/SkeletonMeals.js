import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const SkeletonMeals = () => {
  return (
    <div style={{ width: '100%', margin: '1rem 0' }}>
      <SkeletonTheme highlightColor="#3c4147">
        <Skeleton height={180} />
        <div style={{ margin: '.5rem 0', textAlign: 'center' }}>
          {/* <Skeleton height={40} width={40} /> */}
          <Skeleton height={10} width="75%" />
          <Skeleton height={10} width="30%" />
          <br />
          <Skeleton height={30} width="60%" style={{ borderRadius: '5rem' }} />
        </div>
      </SkeletonTheme>
    </div>
  );
};

export default SkeletonMeals;
