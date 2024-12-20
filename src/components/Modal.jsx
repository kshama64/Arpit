import React from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";

export function DialogDefault({children}) {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(!open);

    return (
        <>
            <Button onClick={handleOpen} variant="red" className="bg-red-900 text-white px-8 py-3 rounded-full text-lg sm:text-xl font-medium font-roboto shadow-lg hover:bg-red-800 hover:scale-105 hover:shadow-2xl transition-transform duration-300 ease-in-out">
                Confirm Booking
            </Button>
            <Dialog  open={open} handler={handleOpen}>
               {children}
            </Dialog>
        </>
    );
}