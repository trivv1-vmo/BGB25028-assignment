"use client"

import { Switch } from "@/components/ui/switch";
import { LightBulbIcon } from "@/components/Icons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const SwitchMode = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Đảm bảo chỉ render sau khi client đã tải xong
  }, []);

  if (!mounted) {
    return null; // Tránh render khi chưa mounted
  }

  return (
    <div>
      <Switch
        checked={theme === "dark"}
        checkedIcon={<LightBulbIcon className="text-text" />}
        uncheckedIcon={<LightBulbIcon />}
        className="data-[state=checked]:bg-blue"
        onCheckedChange={(checked) => {
          setTheme(checked ? "dark" : "light")
        }}
      />
    </div>
  );
};

export default SwitchMode;
