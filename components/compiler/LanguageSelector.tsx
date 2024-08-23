// Adjust the import according to your library setup
  import { LANGUAGE_VERSIONS } from "@/constants/editor";
  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  
  const languages = Object.entries(LANGUAGE_VERSIONS);
  
  const LanguageSelector = ({ language, onSelect }: { language: string; onSelect: (lang: string) => void }) => {
    return (
      <div className="ml-2 mb-4">
        <p className="mb-2 text-lg">Language:</p>
        <Select onValueChange={onSelect} value={language}>
          <SelectTrigger className="w-[180px] px-4 py-2 text-white bg-gray-800 rounded-md shadow hover:bg-gray-700">
            <SelectValue placeholder={language} />
          </SelectTrigger>
          <SelectContent className="bg-gray-900 rounded-md shadow-md">
            {languages.map(([lang, version]) => (
              <SelectItem
                key={lang}
                value={lang}
                className={`flex justify-between px-4 py-2 cursor-pointer rounded-md transition-colors duration-200 ${
                  lang === language ? "bg-gray-800 text-blue-400" : "text-white"
                } hover:bg-gray-800 hover:text-blue-400`}
              >
                {lang}
                <span className="ml-2 text-sm text-gray-600">({version})</span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    );
  };
  
  export default LanguageSelector;
  