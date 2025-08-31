import React from "react";
import {Modal, Zoom, Backdrop, IconButton, Box} from "@mui/material";
import clsx from "clsx";
import {X} from "lucide-react";

interface EventDetailsModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  maxWidth?: number | string;
}

const style = (maxWidth: number | string = 600) => ({
  boxShadow: 24,
  borderRadius: 3,
  p: 0,
  maxWidth: maxWidth,
  outline: "none"
});

const EventDetailsModal: React.FC<EventDetailsModalProps> = ({open, onClose, children, maxWidth}) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      slots={{backdrop: Backdrop}}
      slotProps={{backdrop: {timeout: 400}}}
      aria-labelledby="event-details-modal-title"
      aria-describedby="event-details-modal-description"
      sx={{display: "flex", alignItems: "center", justifyContent: "center"}}
    >
      <Zoom in={open} timeout={300}>
        <Box
          sx={style(maxWidth)}
          className={clsx(
            "bg-white rounded-2xl shadow-2xl relative flex flex-col items-end p-0 md:p-8 w-full",
            "transition-all duration-500"
          )}
        >
          <IconButton
            aria-label="close"
            onClick={onClose}
            className="absolute right-2 top-2 text-gray-500 hover:text-gray-700 z-10"
          >
            <X className="opacity-50" />
          </IconButton>
          <div className="w-full flex flex-col items-center justify-center p-4 md:p-8">{children}</div>
        </Box>
      </Zoom>
    </Modal>
  );
};

export default EventDetailsModal;
