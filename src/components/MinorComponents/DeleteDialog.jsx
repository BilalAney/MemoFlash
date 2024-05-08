/** @format */

import DialogBox from "./DialogBox";

export default function DeleteDialog() {
  return (
    <DialogBox
      noColor="var(--third-color)"
      yesColor="var(--first-color)"
      previousRoute="/app"
    >
      Are you sure you want to delete this card?
    </DialogBox>
  );
}
