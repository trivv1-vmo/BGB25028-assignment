'use client';

import { MenuIcon } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import InputSearch from "./InputSearch";
import SwitchMode from "./SwitchMode";
import { useState } from "react";

const SheetMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline">
          <MenuIcon className="text-primary" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription>
          </SheetDescription>
        </SheetHeader>
        <div className="mt-4">
          <InputSearch />
        </div>
        <div className="mt-6">
          <SwitchMode />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SheetMenu;
