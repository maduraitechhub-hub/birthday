import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css';
import data from '@/data/birthdayData';
import CuteBackground from '@/components/CuteBackground';
import ProgressIndicator from '@/components/ProgressIndicator';
import MusicPlayer from '@/components/MusicPlayer';

export const metadata = {
  title: `Happy Birthday, ${data.birthdayGirlName} ❤️`,
  description: 'A little surprise made with love.',
  robots: { index: false, follow: false },
};
export const viewport = { width: 'device-width', initialScale: 1, themeColor: '#ffd9e3' };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CuteBackground />
        <ProgressIndicator />
        <MusicPlayer src={data.music} />
        {children}
      </body>
    </html>
  );
}
