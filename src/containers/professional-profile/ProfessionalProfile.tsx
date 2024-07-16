import { useLanguage } from "../../locales/LanguageContext";
const ProfessionalProfile = () => {
    const { translations } = useLanguage();
    return (
        <div>
            <h2>{translations.ProfessionalProfile}</h2>
            aaaa
        </div>
    )
}
export default ProfessionalProfile