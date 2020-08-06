import PropTypes from 'prop-types';

const Content = ({ heading }) => (
  <div className="flex justify-center items-center">
    <div className="p-12">
      <h1 className="text-4xl font-semibold mb-6">{heading}</h1>
      <p className="mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        eleifend quis lectus sed fermentum. Praesent dignissim eleifend est ac
        mollis. Aliquam mattis, felis eget ultrices iaculis, sem nibh tincidunt
        lacus, eu malesuada nisl ex id sem. Sed eget sagittis urna. Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Quisque viverra pulvinar justo, sit amet sagittis dui fermentum
        vitae. Vestibulum in tellus metus.
      </p>
      <p className="text-xl font-semibold italic">Something catchy</p>
    </div>
  </div>
);

Content.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default Content;
