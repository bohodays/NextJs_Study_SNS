import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogCancel,
  AlertDialogTitle,
} from "../ui/alert-dialog";
import { useAlertModal } from "@/store/alert-modal";

const AlertModal = () => {
  const alertStore = useAlertModal();

  if (!alertStore.isOpen) return null;

  const handleCancelClick = () => {
    if (alertStore.onNegative) alertStore.onNegative();
    alertStore.actions.close();
  };

  const handleActionClick = () => {
    if (alertStore.onPositive) alertStore.onPositive();
    alertStore.actions.close();
  };

  return (
    <AlertDialog open={alertStore.isOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{alertStore.title}</AlertDialogTitle>
          <AlertDialogDescription>
            {alertStore.description}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={handleCancelClick}>
            취소
          </AlertDialogCancel>
          <AlertDialogAction onClick={handleActionClick}>
            확인
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AlertModal;
