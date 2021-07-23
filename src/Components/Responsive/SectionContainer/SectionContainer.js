const SectionContainer = ({
  children,
  padding,
  container = 'container',
  className = '',
}) => {
  return (
    <section className={[padding, className].join(' ').trim()}>
      <div className={container}>
        <div className="row">{children}</div>
      </div>
    </section>
  );
};

export default SectionContainer;
