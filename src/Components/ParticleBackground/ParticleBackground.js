import Particles from 'react-particles-js';
import ParticlesConfig from './particle-config';

const ParticleBackground = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        background: '#000000',
        overflow: 'hidden',
      }}
    >
      <Particles params={ParticlesConfig} />
    </div>
  );
};

export default ParticleBackground;
