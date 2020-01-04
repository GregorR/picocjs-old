#include "picoc.h"

#include <stdlib.h>
#include <stdio.h>
#include <string.h>

#define PICOC_STACK_SIZE (128*1024)              /* space for the the stack */

int picoc(char *file)
{
    char *argv[] = {"picoc", NULL};
    Picoc pc;
    int StackSize = getenv("STACKSIZE") ? atoi(getenv("STACKSIZE")) : PICOC_STACK_SIZE;
    PicocInitialise(&pc, StackSize);
    PicocPlatformScanFile(&pc, file);
    PicocCallMain(&pc, 1, argv);
    PicocCleanup(&pc);
    return pc.PicocExitValue;
}
