import Title from '../Title';

const TitleContainer = ({ padding }) => {
  return (
    <section className={padding}>
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto">
            <Title title="services we offer" subtitle="what we do" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TitleContainer;
