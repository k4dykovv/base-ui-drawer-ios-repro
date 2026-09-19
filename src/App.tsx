import { Drawer } from '@base-ui/react/drawer';
import styles from './App.module.css';

export default function ExampleDrawerVirtualKeyboardAware() {
  return (
    <Drawer.Root>
      <Drawer.Trigger className={styles.Button}>Open keyboard-aware drawer</Drawer.Trigger>
      <Drawer.VirtualKeyboardProvider>
        <Drawer.Portal>
          <Drawer.Backdrop className={styles.Backdrop} />
          <Drawer.Viewport className={styles.Viewport}>
            <Drawer.Popup className={styles.Popup}>
              <div className={styles.Header}>
                <div className={styles.Handle} />
                <div className={styles.HeaderActions}>
                  <Drawer.Close className={`${styles.Button} ${styles.HeaderButton}`}>
                    Cancel
                  </Drawer.Close>
                  <Drawer.Title className={styles.Title}>Delivery details</Drawer.Title>
                  <Drawer.Close className={`${styles.Button} ${styles.HeaderButton}`}>
                    Save
                  </Drawer.Close>
                </div>
              </div>

              <Drawer.Content className={styles.Scroll}>
                <div className={styles.Form}>
                  <label className={styles.Field}>
                    <span className={styles.FieldLabel}>Name</span>
                    <input className={styles.Input} placeholder="Ada Lovelace" type="text" />
                  </label>
                </div>
              </Drawer.Content>
            </Drawer.Popup>
          </Drawer.Viewport>
        </Drawer.Portal>
      </Drawer.VirtualKeyboardProvider>
    </Drawer.Root>
  );
}
