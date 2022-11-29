import { Box } from './styled';

function SectionYoutube() {
  return (
    <Box className="section-youtube">
      <div className="container">
        <h2 className="text-center">Explain SaaS3 in 5 MINS</h2>
        <iframe
          className="mx-auto mt-6 max-w-full youtube-vidro"
          src="https://www.youtube.com/embed/Yc6tish3Px4"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
    </Box>
  );
}
export default SectionYoutube;
