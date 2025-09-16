import HeroTitle from './HeroTitle';
import ContactButton from './ContactButton';
import MainBanner from './MainBanner';

export default function HomePageContent() {
    return (
        <div className="min-h-screen bg-blue-100 dark:bg-gray-900 flex flex-col items-center justify-center p-4">
            <HeroTitle />
            <ContactButton />
            <MainBanner />
        </div>
    );
}