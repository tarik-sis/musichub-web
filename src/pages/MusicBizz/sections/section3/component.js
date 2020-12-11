import React from "react";
import clsx from "clsx";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import { Fade } from "react-awesome-reveal";

import daftarBg from "../../../../assets/svgs/daftar.svg";
import tempatBg from "../../../../assets/svgs/masukkan_tempat.svg";
import kandidatBg from "../../../../assets/svgs/kandidat.svg";
import musisiBg from "../../../../assets/svgs/musisi_datang.svg";
import alurBg from "../../../../assets/svgs/alur.svg";

const component = ({ classes }) => {
  return (
    <div id="carakerja">
      <Grid className={classes.root} container justify="center">
        <Grid item xs={12} md={8}>
          <Fade duration="1500" direction="up" triggerOnce>
            <h1 className={clsx(classes.header1, classes.spacingBottom)}>
              Bagaimana cara mendapatkan musisi dengan Music Bizz?
            </h1>
          </Fade>
        </Grid>
        <Grid className={classes.spacingBottom} item xs={12}>
          <Grid container justify="center" alignItems="center">
            <Hidden smDown>
              <Grid item md={5} xs={12}>
                <Fade duration="1500" direction="left" triggerOnce>
                  <Grid container justify="flex-end">
                    <Grid item xs={12} md={9} className={classes.spacingRight}>
                      <img
                        alt=""
                        className={classes.fullWidth}
                        src={daftarBg}
                      />
                    </Grid>
                  </Grid>
                </Fade>
              </Grid>
            </Hidden>
            <Grid item md={2} xs={3}>
              <h1 className={classes.listNum} style={{ textAlign: "center" }}>
                01.
              </h1>
            </Grid>
            <Grid item md={5} xs={9}>
              <Fade duration="1500" direction="right" triggerOnce>
                <div className={classes.spacingLeft}>
                  <h2 className={classes.header2}>Daftar</h2>
                  <p className={classes.descText}>
                    Lakukan pendaftaran di aplikasi Music Bizz, isi sesuai data
                    diri kamu.
                  </p>
                </div>
              </Fade>
            </Grid>
          </Grid>
        </Grid>
        <img alt="" className={classes.alur} src={alurBg} />
        <Grid className={classes.spacingBottom} item xs={12}>
          <Grid container justify="center" alignItems="center">
            <Grid item md={5} xs={9}>
              <Fade duration="1500" direction="left" triggerOnce>
                <div
                  className={classes.spacingRight}
                  style={{ textAlign: "right" }}
                >
                  <h2 className={classes.header2}>
                    Masukkan Tempat atau Acara
                  </h2>
                  <p className={classes.descText}>
                    Masukkan tempat atau acara kamu, jangan lupa untuk mengisi
                    berbagai informasi seperti tempat, tanggal, dan gaji yang
                    kamu tawarkan.
                  </p>
                </div>
              </Fade>
            </Grid>
            <Grid item md={2} xs={3}>
              <h1 className={classes.listNum} style={{ textAlign: "center" }}>
                02.
              </h1>
            </Grid>
            <Hidden smDown>
              <Grid item md={5} xs={12}>
                <Fade duration="1500" direction="right" triggerOnce>
                  <Grid container justify="flex-start">
                    <Grid item xs={12} md={11} className={classes.spacingRight}>
                      <img
                        alt=""
                        className={classes.fullWidth}
                        src={tempatBg}
                      />
                    </Grid>
                  </Grid>
                </Fade>
              </Grid>
            </Hidden>
          </Grid>
        </Grid>
        <img alt="" className={classes.alur} src={alurBg} />
        <Grid className={classes.spacingBottom} item xs={12}>
          <Grid container justify="center" alignItems="center">
            <Hidden smDown>
              <Grid item md={5} xs={12}>
                <Fade duration="1500" direction="left" triggerOnce>
                  <Grid container justify="flex-end">
                    <Grid item xs={12} md={10} className={classes.spacingRight}>
                      <img
                        alt=""
                        className={classes.fullWidth}
                        src={kandidatBg}
                      />
                    </Grid>
                  </Grid>
                </Fade>
              </Grid>
            </Hidden>
            <Grid item md={2} xs={3}>
              <h1 className={classes.listNum} style={{ textAlign: "center" }}>
                03.
              </h1>
            </Grid>
            <Grid item md={5} xs={9}>
              <Fade duration="1500" direction="right" triggerOnce>
                <div className={classes.spacingLeft}>
                  <h2 className={classes.header2}>Pilih Kandidat Musisi</h2>
                  <p className={classes.descText}>
                    Beberapa musisi kami akan mendaftar ke tempat atau acara
                    kamu, lihat portofolio dan skill mereka, lalu pilih musisi
                    yang sesuai dengan kebutuhanmu.
                  </p>
                </div>
              </Fade>
            </Grid>
          </Grid>
        </Grid>
        <img alt="" className={classes.alur} src={alurBg} />
        <Grid className={classes.spacingBottom} item xs={12}>
          <Grid container justify="center" alignItems="center">
            <Grid item md={5} xs={9}>
              <Fade duration="1500" direction="left" triggerOnce>
                <div
                  className={classes.spacingRight}
                  style={{ textAlign: "right" }}
                >
                  <h2 className={classes.header2}>
                    Musisi Akan Datang ke Tempat atau Acara Kamu
                  </h2>
                  <p className={classes.descText}>
                    Tunggu hingga tanggal acara kamu dimulai, musisi kami akan
                    datang ke tempat atau acara kamu. Setelah itu, mereka akan
                    memainkan penampilan terbaik mereka.
                  </p>
                </div>
              </Fade>
            </Grid>
            <Grid item md={2} xs={3}>
              <h1 className={classes.listNum} style={{ textAlign: "center" }}>
                04.
              </h1>
            </Grid>
            <Hidden smDown>
              <Grid item md={5} xs={12}>
                <Fade duration="1500" direction="right" triggerOnce>
                  <Grid container justify="flex-start">
                    <Grid item xs={12} md={10} className={classes.spacingRight}>
                      <img
                        alt=""
                        className={classes.fullWidth}
                        src={musisiBg}
                      />
                    </Grid>
                  </Grid>
                </Fade>
              </Grid>
            </Hidden>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default component;
