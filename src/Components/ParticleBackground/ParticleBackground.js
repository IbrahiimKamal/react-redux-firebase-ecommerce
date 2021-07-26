import Particles from 'react-particles-js';
import ParticlesConfig from './particle-config';

const ParticleBackground = ({
  position,
  top,
  left,
  width,
  height,
  background,
}) => {
  return (
    <div
      style={{
        position,
        top,
        left,
        width,
        height,
        background,
        overflow: 'hidden',
      }}
    >
      <Particles params={ParticlesConfig} />
    </div>
  );
};

export default ParticleBackground;
