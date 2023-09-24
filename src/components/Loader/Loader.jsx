import { ThreeCircles } from 'react-loader-spinner';

export default function Loader() {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(3px)',
        zIndex: 1,
      }}
    >
      <ThreeCircles
        height="100"
        width="100"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor="#e3ffa8"
        innerCircleColor="#b8c5ff"
        middleCircleColor="#e3ffa8"
      />
    </div>
  );
}
