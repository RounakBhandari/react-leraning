const dontCopy = () => {
  alert("Please Dont Copy others content.");
};
const DontCopy = () => {
  return (
    <div className="p-4">
      <p onCopy={dontCopy}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam tempora sequi laboriosam, quisquam fugit veritatis
        quibusdam ex. Tempore cumque sed consequatur, tempora ratione unde! Cumque tempora laboriosam accusantium
        tenetur corrupti, eaque quis eum. Quo, saepe. Laudantium amet mollitia itaque quisquam, rerum officiis delectus?
        Tempora beatae enim hic impedit ipsam dolor.s
      </p>
    </div>
  );
};

export default DontCopy;
