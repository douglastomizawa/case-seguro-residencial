import { BreakpointState, Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SizeModalService {
  private nameWidth: string = '';
  public modalOpening: any;
  constructor(
    private readonly breakpointObserver: BreakpointObserver,
    ) { }

  isExtraSmall: Observable<BreakpointState> = this.breakpointObserver.observe(
    Breakpoints.XSmall
  );
  isSmall: Observable<BreakpointState> = this.breakpointObserver.observe(
    Breakpoints.Small
  );
  isMedium: Observable<BreakpointState> = this.breakpointObserver.observe(
    Breakpoints.Medium
  );
  isLarge: Observable<BreakpointState> = this.breakpointObserver.observe(
    Breakpoints.Large
  );
  isXLarge: Observable<BreakpointState> = this.breakpointObserver.observe(
    Breakpoints.XLarge
  );
  public setSizeModal(modalOpen: any): any {
    let nameWidth1 = '';
    this.modalOpening = modalOpen;
    const smallDialogSubscription = this.isExtraSmall.subscribe(size => {
      if (size.matches) {
        nameWidth1 = 'extraSmall';
      }
    });
    const tabletDialogSubscription = this.isSmall.subscribe( size => {
      if (size.matches) {
        nameWidth1 = 'small';
      }
    });
    const tabletPlustDialogSubscription = this.isMedium.subscribe(size => {
      if (size.matches) {
        nameWidth1 = 'medium';
      }
    });
    const desktopDialogSubscription = this.isLarge.subscribe(size => {
      if (size.matches) {
        nameWidth1 = 'large';
      }
    });
    const desktopLargeDialogSubscription = this.isXLarge.subscribe(size => {
      if (size.matches) {
        nameWidth1 = 'extraLarge';
      }
    });
    switch (nameWidth1) {
        case 'extraSmall':
          modalOpen.updateSize('100vw', '100vh');
          break;
        case 'small':
          modalOpen.updateSize('80%', '80%');
          break;
        case 'medium':
          modalOpen.updateSize('80%', '80%');
          break;
        case 'large':
          modalOpen.updateSize('60%', '80%');
          break;
        case 'extraLarge':
          modalOpen.updateSize('60%', '80%');
          break;
        default:
          break;
      }
    modalOpen
    .afterClosed()
    .subscribe(() => {
      smallDialogSubscription.unsubscribe();
      tabletDialogSubscription.unsubscribe();
      tabletPlustDialogSubscription.unsubscribe();
      desktopDialogSubscription.unsubscribe();
      desktopLargeDialogSubscription.unsubscribe();
    });
    this.nameWidth = nameWidth1;
  }
  // unsubscribeModalSize(modalOpen){
  // }
}
