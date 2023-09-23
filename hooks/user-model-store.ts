import { Server, ChannelType, Channel } from "@prisma/client";
import { create } from "zustand";

export type ModdalType =
  | "createServer"
  | "invite"
  | "editServer"
  | "members"
  | "createChannel"
  | "LeaveServer"
  | "deleteServer"
  | "deleteChannel"
  | "editChannel"
  | "messageFile"
  | "deleteMessage"

interface ModalData {
  server?: Server;
  channelType?: ChannelType;
  channel?: Channel;
  apiUrl?: string;
  query?: Record<string, any>;
}

interface ModalStore {
  type: ModdalType | null;
  data: ModalData;
  isOpen: boolean;
  onOpen: (type: ModdalType, data?: ModalData) => void;
  onClose: () => void;
}

export const useModal = create<ModalStore>((set) => ({
  type: null,
  data: {},
  isOpen: false,
  onOpen: (type, data = {}) => set({ isOpen: true, type, data }),
  onClose: () => set({ type: null, isOpen: false }),
}));
