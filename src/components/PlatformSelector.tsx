import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
// import { Platform } from "../hooks/useGames";
import usePlatforms, { Platform } from "../hooks/usePlatforms";

// interface Props {
//   onSelectPlatform: (platform: Platform) => void;
//   selectedPlatform: Platform | null;
// }

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatformId: Platform | null;
}

// const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
const PlatformSelector = ({ onSelectPlatform, selectedPlatformId }: Props) => {
  const { data, error } = usePlatforms();

  const selectedPlatform = data?.results.find(
    (p) => p.id === selectedPlatformId
  );

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => onSelectPlatform(platform)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
